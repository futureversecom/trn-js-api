// ChainIds
export const MAINNET_CHAINID = 7668;
export const PORCINI_CHAINID = 7672;

// Default token addresses
export const ROOT_ADDRESS = "0xcCcCCccC00000001000000000000000000000000";
export const ROOT_ASSET_ID = 1;
export const XRP_ADDRESS = "0xCCCCcCCc00000002000000000000000000000000";
export const XRP_ASSET_ID = 2;
export const RNS_REGISTRAR_ADDRESS_ROOT = "0xEC58C26B8E0A4bc0fe1ad21D216e4ecAd9e037A8";
export const RNS_REGISTRAR_ADDRESS_PORCINI = "0xA931c1F9621ECa562c258B81bF9fA8401f12241B";
export const ROOTSCAN_URL = "https://rootscan.io";
export const ROOTSCAN_PORCINI_URL = "https://porcini.rootscan.io";
export const BLOCK_EXPLORER_ROOT_URL = "https://explorer.rootnet.live";
export const BLOCK_EXPLORER_PORCINI_URL = "https://explorer.rootnet.cloud/";

// Precompile address for nft precompile is 1721
export const NFT_PRECOMPILE_ADDRESS = "0x00000000000000000000000000000000000006b9";
// Precompile address for sft precompile is 1731
export const SFT_PRECOMPILE_ADDRESS = "0x00000000000000000000000000000000000006c3";
// Precompile address for futurepass registrar precompile is 65535
export const FUTUREPASS_REGISTRAR_PRECOMPILE_ADDRESS = "0x000000000000000000000000000000000000FFFF";

// Precompile address for peg precompile is 1939
export const PEG_PRECOMPILE_ADDRESS = "0x0000000000000000000000000000000000000793";

// Precompile address for dex precompile
export const DEX_PRECOMPILE_ADDRESS = "0x000000000000000000000000000000000000DDDD";

// Precompile address for fee proxy
export const FEE_PROXY_PRECOMPILE_ADDRESS = "0x00000000000000000000000000000000000004bb";

// Available on both Mainnet and Porcini
export const MULTICALL3_ADDRESS = "0xc9C2E2429AeC354916c476B30d729deDdC94988d";

export const MARKETPLACE_PRECOMPILE_ADDRESS = "0x00000000000000000000000000000000000006CD";

/** ABIs */

export const MARKETPLACE_PRECOMPILE_ABI = [
	"event AuctionClose(uint256 indexed collectionId, uint256 indexed listingId, address sender, uint256[] serialNumbers)",
	"event AuctionOpen(uint256 indexed collectionId, uint256 indexed listingId, uint256 indexed reservePrice, address sender, uint256[] serialNumbers)",
	"event Bid(address indexed bidder, uint256 indexed listingId, uint256 indexed amount)",
	"event FixedPriceSaleClose(uint256 indexed collectionId, uint256 indexed listingId, address sender, uint256[] serialNumbers)",
	"event FixedPriceSaleComplete(uint256 indexed collectionId, uint256 indexed listingId, uint256 indexed fixedPrice, address sender, uint256[] serialNumbers)",
	"event FixedPriceSaleList(address indexed seller, uint256 indexed listingId, uint256 indexed fixedPrice, uint256[] serialNumbers, address collectionAddress)",
	"event FixedPriceSaleUpdate(uint256 indexed collectionId, uint256 indexed listingId, uint256 indexed newPrice, address sender, uint256[] serialNumbers)",
	"event MarketplaceRegister(address indexed sender, uint256 indexed marketplaceId, address marketplace_account)",
	"event Offer(uint256 indexed offerId, address indexed sender, uint256 collectionId, uint256 seriesId)",
	"event OfferAccept(uint256 indexed offerId, uint256 indexed amount, address indexed sender, uint256 collectionId, uint256 seriesId)",
	"event OfferCancel(uint256 indexed offerId, address indexed sender, uint256 collectionId, uint256 seriesId)",
	"function acceptOffer(uint64 offerId)",
	"function auctionNftWithMarketplaceId(address collectionAddress, uint256[] serialNumberIds, address paymentAsset, uint256 reservePrice, uint256 duration, uint256 marketplaceId) payable",
	"function auctionNftWithoutMarketplace(address collectionAddress, uint256[] serialNumberIds, address paymentAsset, uint256 reservePrice, uint256 duration) payable",
	"function bid(uint128 listingId, uint256 amount)",
	"function buy(uint128 listingId) payable",
	"function cancelOffer(uint64 offerId)",
	"function cancelSale(uint128 listingId)",
	"function getListingFromId(uint128 listingId) view returns (uint32 collectionId, uint32[] serialNumbers, uint128 price, uint32 paymentAsset)",
	"function getMarketplaceAccount(uint32 marketplaceId) view returns (address marketplaceAccount)",
	"function getOfferFromId(uint64 offerId) view returns (uint32 collectionId, uint32 serialNumber, uint128 amount, address buyer)",
	"function makeSimpleOfferWithMarketplaceId(address collectionAddress, uint32 serialNumber, uint256 amount, address assetId, uint32 marketplaceId) returns (uint256 offerId)",
	"function makeSimpleOfferWithoutMarketplace(address collectionAddress, uint32 serialNumber, uint256 amount, address assetId) returns (uint256 offerId)",
	"function registerMarketplace(address marketplaceAccount, uint256 entitlement) returns (uint256 marketplaceId)",
	"function sellNftWithMarketplaceId(address collectionAddress, uint256[] serialNumberIds, address buyer, address paymentAsset, uint256 fixedPrice, uint256 duration, uint32 marketplaceId) returns (uint256 listingId)",
	"function sellNftWithoutMarketplace(address collectionAddress, uint256[] serialNumberIds, address buyer, address paymentAsset, uint256 fixedPrice, uint256 duration) returns (uint256 listingId)",
	"function updateFixedPrice(uint128 listingId, uint256 newPrice)",
];

export const MULTICALL3_ABI = [
	"function aggregate(tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes[] returnData)",
	"function aggregate3(tuple(address target, bool allowFailure, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)",
	"function aggregate3Value(tuple(address target, bool allowFailure, uint256 value, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)",
	"function blockAndAggregate(tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes32 blockHash, tuple(bool success, bytes returnData)[] returnData)",
	"function getBasefee() view returns (uint256 basefee)",
	"function getBlockHash(uint256 blockNumber) view returns (bytes32 blockHash)",
	"function getBlockNumber() view returns (uint256 blockNumber)",
	"function getChainId() view returns (uint256 chainid)",
	"function getCurrentBlockCoinbase() view returns (address coinbase)",
	"function getCurrentBlockDifficulty() view returns (uint256 difficulty)",
	"function getCurrentBlockGasLimit() view returns (uint256 gaslimit)",
	"function getCurrentBlockTimestamp() view returns (uint256 timestamp)",
	"function getEthBalance(address addr) view returns (uint256 balance)",
	"function getLastBlockHash() view returns (bytes32 blockHash)",
	"function tryAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)",
	"function tryBlockAndAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes32 blockHash, tuple(bool success, bytes returnData)[] returnData)",
];

export const SFT_PRECOMPILE_ABI = [
	"event InitializeSftCollection(address indexed collectionOwner, address indexed precompileAddress)",
	"function initializeCollection(address owner, bytes name, bytes metadataPath, address[] royaltyAddresses, uint32[] royaltyEntitlements) returns (address, uint32)",
];

export const FEE_PROXY_PRECOMPILE_ABI = [
	"function callWithFeePreferences(address asset, uint128 maxPayment, address target, bytes input)",
];

export const ERC20_PRECOMPILE_ABI = [
	"event Transfer(address indexed from, address indexed to, uint256 value)",
	"event Approval(address indexed owner, address indexed spender, uint256 value)",
	"function approve(address spender, uint256 amount) public returns (bool)",
	"function allowance(address owner, address spender) public view returns (uint256)",
	"function balanceOf(address who) public view returns (uint256)",
	"function name() public view returns (string memory)",
	"function symbol() public view returns (string memory)",
	"function decimals() public view returns (uint8)",
	"function transfer(address who, uint256 amount)",
];

export const NFT_PRECOMPILE_ABI = [
	"event InitializeCollection(address indexed collectionOwner, address precompileAddress)",
	"function initializeCollection(address owner, bytes name, uint32 maxIssuance, bytes metadataPath, address[] royaltyAddresses, uint32[] royaltyEntitlements) returns (address, uint32)",
];

export const OWNABLE_ABI = [
	"event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
	"function owner() public view returns (address)",
	"function renounceOwnership()",
	"function transferOwnership(address owner)",
];

export const ERC721_PRECOMPILE_ABI = [
	// ERC721
	"event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
	"event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
	"event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",

	"function balanceOf(address who) public view returns (uint256)",
	"function ownerOf(uint256 tokenId) public view returns (address)",
	"function safeTransferFrom(address from, address to, uint256 tokenId)",
	"function transferFrom(address from, address to, uint256 tokenId)",
	"function approve(address to, uint256 tokenId)",
	"function getApproved(uint256 tokenId) public view returns (address)",
	"function setApprovalForAll(address operator, bool _approved)",
	"function isApprovedForAll(address owner, address operator) public view returns (bool)",

	// ERC721 Metadata
	"function name() public view returns (string memory)",
	"function symbol() public view returns (string memory)",
	"function tokenURI(uint256 tokenId) public view returns (string memory)",

	// Root specific precompiles
	"event MaxSupplyUpdated(uint32 maxSupply)",
	"event BaseURIUpdated(string baseURI)",

	"function totalSupply() external view returns (uint256)",
	"function mint(address owner, uint32 quantity)",
	"function setMaxSupply(uint32 maxSupply)",
	"function setBaseURI(bytes baseURI)",
	"function ownedTokens(address who, uint16 limit, uint32 cursor) public view returns (uint32, uint32, uint32[] memory)",

	// Ownable
	...OWNABLE_ABI,
];

export const ERC1155_PRECOMPILE_ABI = [
	// ERC1155
	"event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
	"event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] balances)",
	"event ApprovalForAll(address indexed account, address indexed operator, bool approved)",

	"function balanceOf(address owner, uint256 id) external view returns (uint256)",
	"function balanceOfBatch(address[] owners, uint256[] ids) external view returns (uint256[] memory)",
	"function setApprovalForAll(address operator, bool approved) external",
	"function isApprovedForAll(address account, address operator) external view returns (bool)",
	"function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external",
	"function safeBatchTransferFrom(address from, address to, uint256[] calldata ids, uint256[] calldata amounts, bytes calldata data) external",

	// Burnable
	"function burn(address account, uint256 id, uint256 value) external",
	"function burnBatch(address account, uint256[] ids, uint256[] values) external",

	// Supply
	"function totalSupply(uint256 id) external view returns (uint256)",
	"function exists(uint256 id) external view returns (bool)",

	// Metadata
	"function uri(uint256 id) external view returns (string memory)",

	// TRN
	"event TokenCreated(uint32 indexed serialNumber)",
	"event MaxSupplyUpdated(uint128 indexed maxSupply)",
	"event BaseURIUpdated(string baseURI)",

	"function createToken(bytes name, uint128 initialIssuance, uint128 maxIssuance, address tokenOwner) external returns (uint32)",
	"function mint(address owner, uint256 id, uint256 amount) external",
	"function mintBatch(address owner, uint256[] ids, uint256[] amounts) external",
	"function setMaxSupply(uint256 id, uint32 maxSupply) external",
	"function setBaseURI(bytes baseURI) external",

	// Ownable
	...OWNABLE_ABI,
];

export const FUTUREPASS_PRECOMPILE_ABI = [
	// Futurepass
	"event FuturepassDelegateRegistered(address indexed futurepass, address indexed delegate, uint8 proxyType)",
	"event FuturepassDelegateUnregistered(address indexed futurepass, address delegate)",
	"event Executed(uint8 indexed callType, address indexed target, uint256 indexed value, bytes4 data)",
	"event ContractCreated(uint8 indexed callType, address indexed contractAddress, uint256 indexed value, bytes32 salt)",

	"function delegateType(address delegate) external view returns (uint8)",

	"function registerDelegateWithSignature(address delegate, uint8 proxyType, uint32 deadline, bytes memory signature) external",
	"function unregisterDelegate(address delegate) external",
	"function proxyCall(uint8 callType, address callTo, uint256 value, bytes memory callData) external payable",

	// Ownable
	...OWNABLE_ABI,
];

export const FUTUREPASS_REGISTRAR_PRECOMPILE_ABI = [
	"event FuturepassCreated(address indexed futurepass, address owner)",
	"function futurepassOf(address owner) external view returns (address)",
	"function create(address owner) external returns (address)",
];

export const DEX_PRECOMPILE_ABI = [
	"function addLiquidity(address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline) returns (uint256 amountA, uint256 amountB, uint256 liquidity)",
	"function addLiquidityETH(address token, uint256 amountTokenDesired, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline) payable returns (uint256 amountToken, uint256 amountETH, uint256 liquidity)",
	"function getAmountIn(uint256 amountOut, uint256 reserveIn, uint256 reserveOut) pure returns (uint256 amountIn)",
	"function getAmountOut(uint256 amountIn, uint256 reserveIn, uint256 reserveOut) pure returns (uint256 amountOut)",
	"function getAmountsIn(uint256 amountOut, address[] path) view returns (uint256[] amounts)",
	"function getAmountsOut(uint256 amountIn, address[] path) view returns (uint256[] amounts)",
	"function quote(uint256 amountA, uint256 reserveA, uint256 reserveB) pure returns (uint256 amountB)",
	"function removeLiquidity(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline) returns (uint256 amountA, uint256 amountB)",
	"function removeLiquidityETH(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline) returns (uint256 amountToken, uint256 amountETH)",
	"function swapETHForExactTokens(uint256 amountOut, address[] path, address to, uint256 deadline) payable returns (uint256[] amounts)",
	"function swapExactETHForTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline) payable returns (uint256[] amounts)",
	"function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) returns (uint256[] amounts)",
	"function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) returns (uint256[] amounts)",
	"function swapTokensForExactETH(uint256 amountOut, uint256 amountInMax, address[] path, address to, uint256 deadline) returns (uint256[] amounts)",
	"function swapTokensForExactTokens(uint256 amountOut, uint256 amountInMax, address[] path, address to, uint256 deadline) returns (uint256[] amounts)",
];
