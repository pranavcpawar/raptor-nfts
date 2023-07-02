// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract RaptorsNft is ERC721, ERC721Enumerable, Pausable, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter private _tokenIdCounter;

    uint256 public maxSupply;
    uint256 public mintPrice;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    address public withdrawWalletAddress;
    mapping(address => uint256) public walletMints;

    event MintedNFT(uint256 id, address indexed buyer, uint256 mintPrice, string indexed tokenURI, uint256 timestamp );

    struct Sale {
        uint256 id;
        address buyer;
        uint256 mintPrice;
        string imageURL;
        uint256 timestamp;
    }

    Sale[] sales;

    constructor() ERC721("RaptorsNft", "RNFT") {
        mintPrice = 0.01 ether;
        maxSupply = 64;
        maxPerWallet = 3;
        withdrawWalletAddress = msg.sender;
    }

    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmT5bbSLQvD9DFSTL36K6SdtnND7wtzcBnz1NwNyVuqamn/";
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mintRaptorNft() public payable {
        require(isPublicMintEnabled, "Minting not enabled!");
        require(msg.value == mintPrice, "Insufficient Funds!");

        require(totalSupply() < maxSupply, "Sold Out!");

        require(walletMints[msg.sender] + 1 <= maxPerWallet, "exceed max wallet mint");

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        _safeMint(msg.sender, tokenId);

        string memory myBaseURI = _baseURI();
        
        sales.push(
            Sale(
                tokenId, 
                msg.sender,
                mintPrice,
                string(abi.encodePacked(myBaseURI, tokenId.toString(), ".png")),
                block.timestamp
            ));

        emit MintedNFT(tokenId, msg.sender, mintPrice, tokenURI(tokenId), block.timestamp);
    }

    function listMintedNFTs() public view returns (Sale[] memory) {
        return sales;
    }

    function getMintedNFT(uint256 tokenId_) public view returns (Sale memory) {
        return sales[tokenId_];
    }

    function tokenURI(uint256 tokenId_) public view override returns (string memory) {
        require(_exists(tokenId_), "Metadata: URI query for Nonexistent token");
        string memory myBaseURI = _baseURI();
        return string(abi.encodePacked(myBaseURI, tokenId_.toString(), ".json"));
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWalletAddress.call{ value: address(this).balance }('');
        require(success, "withdraw failed");
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        whenNotPaused
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    // The following functions are overrides required by Solidity.
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
