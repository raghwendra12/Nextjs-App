import axios from 'axios';
import Image from 'next/image';



const CoinList = ({ coinData }) => {
    console.log(coinData)
    
    return (
        <div >
            
            <h1 style={{textAlign:'center'}}>CoinList</h1>
              {coinData.coins.map((data,index)=>{
                     return(
                        <div className='coinDiv' key={index}>
                            <p>{data.name}</p>
                            <img src={data.icon} alt={data.name} />
                            <p>Rs: {data.price}</p>
                            <p>{data.rank}</p>
                        </div>
                     )
              })}
            </div>
    )
}

export const getServerSideProps = async () => {
    const data = await axios.get("https://api.coinstats.app/public/v1/coins")

    return {
        props: {
            coinData: data.data
        }
    }
}


export default CoinList