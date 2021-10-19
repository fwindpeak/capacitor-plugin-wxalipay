# capacitor-plugin-wxalipay

capacitor 3 plugin for wechatPay and alipay

forked from [veluxa/capacitor-plugin-pay](https://github.com/veluxa/capacitor-plugin-pay)

## Install

```bash
npm install capacitor-plugin-wxalipay
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`wxPayRequest(...)`](#wxpayrequest)
* [`aliPayRequest(...)`](#alipayrequest)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

--------------------


### wxPayRequest(...)

```typescript
wxPayRequest(options: WxParams) => any
```

| Param         | Type                                          |
| ------------- | --------------------------------------------- |
| **`options`** | <code><a href="#wxparams">WxParams</a></code> |

**Returns:** <code>any</code>

--------------------


### aliPayRequest(...)

```typescript
aliPayRequest(options: AlipayParams) => any
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#alipayparams">AlipayParams</a></code> |

**Returns:** <code>any</code>

--------------------


### Interfaces


#### WxParams

| Prop            | Type                |
| --------------- | ------------------- |
| **`appId`**     | <code>string</code> |
| **`mchId`**     | <code>string</code> |
| **`prepayId`**  | <code>string</code> |
| **`noncestr`**  | <code>string</code> |
| **`timestamp`** | <code>number</code> |
| **`sign`**      | <code>string</code> |


#### AlipayParams

| Prop            | Type                |
| --------------- | ------------------- |
| **`orderInfo`** | <code>string</code> |

</docgen-api>
