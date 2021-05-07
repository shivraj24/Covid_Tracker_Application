import react,{useState,useEffect} from "react";
import { fetchDailyData } from "../../API";
import styles from "./Chart.module.css";
import {Line, Bar} from "react-chartjs-2";

const Chart = () =>{
    const [dailyData,setDailyData] = useState([]);
    useEffect(()=>{
        const fetchAPI = async () =>{
            const initialDailyData = await fetchDailyData();
            setDailyData(initialDailyData);
        };
        console.log(dailyData);
        fetchAPI();
    },[]);


    const linechart = (

        dailyData.length
        ?
        <Line
        data = {{
            labels : dailyData.map(({date}) => date),
            datasets:[{
                data: dailyData.map(({confirmed}) => confirmed),
                label : 'Infected',
                borderColor: '#3333ff',
                fill: true,
            },
            {
                
                data: dailyData.map(({deaths}) => deaths),
                label : 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true,
            }]
        }}
        /> : null
    );


    return(
            <div className = {styles.container}>
                {linechart}
            </div>
    );
}



export default Chart;