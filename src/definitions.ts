export interface WxalipayPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
