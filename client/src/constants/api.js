export const API_USER_HOST = 'http://192.168.0.60:4001';
export const API_TRANSACTION_HOST = 'http://192.168.0.60:4002';
export const CLIENT_HOST = 'http://192.168.0.60:19002';

//Fetchs asociadas a User
export const POST_REGISTER_USER = `${API_USER_HOST}/user/signup`;//#dataForm
export const POST_LOGIN_USER = `${API_USER_HOST}/user/login`;//#dataForm
export const PUT_USER = `${API_USER_HOST}/user`;//:dataId & dataForm
export const GET_USER_BY_ID = `${API_USER_HOST}/user`;//:dataId
export const GET_USERS = `${API_USER_HOST}/user`;
export const POST_CODE = `${API_USER_HOST}/user/verify`;//:token

export const GET_ADDRESS = `${API_USER_HOST}/user/validate-address`;//?direccion=:queryData

//Fetchs asociadas a Transactions
export const GET_TRANSFER_SENDED = `${API_TRANSACTION_HOST}/transaction/transfers`;//:dataId
export const GET_TRANSFER_INCOME = `${API_TRANSACTION_HOST}/transaction/incomes`;//:dataId
export const POST_TRANSFER = `${API_TRANSACTION_HOST}/transaction/transfer`; //#dataForm

//Fetchs asociadas a User
export const POST_ACCOUNT = `${API_TRANSACTION_HOST}/transaction/account`;//:dataId
export const GET_ACCOUNTS = `${API_TRANSACTION_HOST}/transaction/account`;
export const GET_ACCOUNT_BY_ID = `${API_TRANSACTION_HOST}/transaction/account`; //:dataId
export const PUT_ACCOUNT_BY_ID = `${API_TRANSACTION_HOST}/transaction/account`; //:dataId #dataForm
export const GET_BALANCE_BY_ID = `${API_TRANSACTION_HOST}/transaction/account/balance`; //:dataId
