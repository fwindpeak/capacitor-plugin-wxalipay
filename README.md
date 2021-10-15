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

- [`echo(...)`](#echo)
- [`wxPayRequest(...)`](#wxpayrequest)
- [`aliPayRequest(...)`](#alipayrequest)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### wxPayRequest(...)

```typescript
wxPayRequest(options: WxParams) => Promise<any>
```

| Param         | Type                                          |
| ------------- | --------------------------------------------- |
| **`options`** | <code><a href="#wxparams">WxParams</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### aliPayRequest(...)

```typescript
aliPayRequest(options: AlipayParams) => Promise<any>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#alipayparams">AlipayParams</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### WxParams

| Prop            | Type                |
| --------------- | ------------------- |
| **`mch_id`**    | <code>string</code> |
| **`prepay_id`** | <code>string</code> |
| **`nonce`**     | <code>string</code> |
| **`timestamp`** | <code>number</code> |
| **`sign`**      | <code>string</code> |

#### AlipayParams

| Prop            | Type                |
| --------------- | ------------------- |
| **`orderInfo`** | <code>string</code> |

</docgen-api>
