<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item>
        <ion-label position="stacked">支付金额:</ion-label>
        <ion-input :value="money" @change="onMoneyChange"></ion-input>
      </ion-item>
      <ion-button @click="onWechatPay" expand="block">微信支付</ion-button>


      <div style="margin-top:24px">
        <ion-button @click="onAliPay" expand="block" color="tertiary">支付宝支付</ion-button>
      </div>



    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';
import { Wxalipay } from 'capacitor-plugin-wxalipay';

export default defineComponent({
  name: 'Tab1Page',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  data() {
    return {
      money: '0.01',
    };
  },
  methods: {
    async onWechatPay() {
      const res = await Wxalipay.echo({
        value: 'hello echo ' + this.money,
      });
      console.log('res', res);

      const wxRes = {
        code: '0',
        note: 'Success',
        data: {
          appId: '',
          mchId: '',
          prepayId: '',
          noncestr: '',
          timestamp: 123,
          outTradeNo: '',
          sign: '',
          errCode: null,
          errCodeDes: null,
        },
      };
      const { appId, mchId, prepayId, noncestr, timestamp, sign } = wxRes.data;
      Wxalipay.wxPayRequest({
        appId,
        mchId,
        prepayId,
        noncestr,
        timestamp,
        sign,
      });
    },

    async onAliPay() {
      Wxalipay.aliPayRequest(
        { orderInfo: this.money }
      )
    },

    onMoneyChange(e: any) {
      console.log('onMoneyChange', e.target.value);
      this.money = e.target.value;
    },
  },
});
</script>
