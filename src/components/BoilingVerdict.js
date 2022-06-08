export default function BoilingVerdict({celcius=0}){
    if(celcius>=100){
        return <p>water would boil</p>
    }else{
        return <p>water would  not boil</p>
    }
}