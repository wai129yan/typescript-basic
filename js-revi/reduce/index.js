// JavaScript Array method တစ်ခုဖြစ်ပြီး array ကို တစ်လုံးချင်း loop လိုက်ပြီး တစ်ခုတည်းသောတန်ဖိုး အဖြစ် ပြန်ထုတ်ပေးနိုင်တယ်။
const numbers = [1,2,3,4,5];

const total = numbers.reduce((acc,current)=> {
    return acc + current;
},0);

console.log(total);