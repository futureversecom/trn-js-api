/** ABIs */

export const SFT_PRECOMPILE_ABI = [
	"event InitializeSftCollection(address indexed collectionOwner, address indexed precompileAddress)",
	"function initializeCollection(address owner, bytes name, bytes metadataPath, address[] royaltyAddresses, uint32[] royaltyEntitlements) returns (address, uint32)",
];

export const FEE_PROXY_ABI = [
	"function callWithFeePreferences(address asset, uint128 maxPayment, address target, bytes input)",
];

export const ERC20_ABI = [
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

const OWNABLE_ABI = [
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
