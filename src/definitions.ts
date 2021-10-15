export interface WxParams {
  mch_id: string;
  prepay_id: string;
  nonce: string;
  timestamp: number;
  sign: string;
}

export interface AlipayParams {
  orderInfo: string;
}
export interface WxalipayPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  wxPayRequest(options: WxParams): Promise<any>;
  aliPayRequest(options: AlipayParams): Promise<any>;
}
