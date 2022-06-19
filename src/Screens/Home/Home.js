import { useState } from 'react'
import Carte from './Carte'
import Chart from './Chart.js'
import "./Home.css"
import Feedback from './Feedback'
const Home = ({clickHandler}) => {
  const [feedbacks,setFeedbacks] = useState([
    {
      "pic": "fanel_1.svg",
      "text": "Locata in mota fiduciam perlato astute distributo verum seditionum locata consulta aurum eum sunt quo aurum praefecti diligens astute abunde."
    },
    {
      "pic": "walid_1.svg",
      "text": "Locata in mota fiduciam perlato astute distributo verum seditionum locata consulta aurum eum sunt quo aurum praefecti diligens astute abunde."
    },
    {
      "pic": "kamel_1.svg",
      "text": "Locata in mota fiduciam perlato astute distributo verum seditionum locata consulta aurum eum sunt quo aurum praefecti diligens astute abunde."
    },
    {
      "pic": "ouael_1.svg",
      "text": "Locata in mota fiduciam perlato astute distributo verum seditionum locata consulta aurum eum sunt quo aurum praefecti diligens astute abunde."
    },
    {
      "pic": "fanel_1.svg",
      "text": "Locata in mota fiduciam perlato astute distributo verum seditionum locata consulta aurum eum sunt quo aurum praefecti diligens astute abunde."
    },
    {
      "pic": "fanel_1.svg",
      "text": "Locata in mota fiduciam perlato astute distributo verum seditionum locata consulta aurum eum sunt quo aurum praefecti diligens astute abunde."
    },
    {
      "pic": "fanel_1.svg",
      "text": "Locata in mota fiduciam perlato astute distributo verum seditionum locata consulta aurum eum sunt quo aurum praefecti diligens astute abunde."
    },
    {
      "pic": "fanel_1.svg",
      "text": "Locata in mota fiduciam perlato astute distributo verum seditionum locata consulta aurum eum sunt quo aurum praefecti diligens astute abunde."
    },
    {
      "pic": "fanel_1.svg",
      "text": "Locata in mota fiduciam perlato astute distributo verum seditionum locata consulta aurum eum sunt quo aurum praefecti diligens astute abunde."
    },
    {
      "pic": "fanel_1.svg",
      "text": "Locata in mota fiduciam perlato astute distributo verum seditionum locata consulta aurum eum sunt quo aurum praefecti diligens astute abunde."
    },
    {
      "pic": "fanel_1.svg",
      "text": "Locata in mota fiduciam perlato astute distributo verum seditionum locata consulta aurum eum sunt quo aurum praefecti diligens astute abunde."
    },
  ])
  return (
    <div className='container'>
      <div className='container-left'>
        <div className='chart-container'>
          <Chart /> 
        </div>
        <div className='carte-container' onClick={() => {clickHandler(1)}}>
          <Carte />
        </div>
      </div>
      <div className='container-right'>
        <h1 className='title'>Avis</h1>
        <div className='feedbacks-container'>
        {
          feedbacks.map((feedback,index) => {
            return <Feedback key={index} feedback={feedback} />
          })
        }
        </div> 
      </div>

    </div>
  )
}

export default Home