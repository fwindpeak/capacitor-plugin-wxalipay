export interface WxParams {
  appId: string;
  mchId: string;
  prepayId: string;
  noncestr: string;
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
