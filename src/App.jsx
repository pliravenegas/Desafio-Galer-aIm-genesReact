import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Header from './componentes/Header.jsx'
import Card from './componentes/Card.jsx'
import Footer from './componentes/Footer.jsx'



function App() {
  const título = "Galería de Imágenes con React"
  const data = [

    {
      img: "https://images.unsplash.com/photo-1565626379052-880c20b41b8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      título: "Desierto",
      descripción: " Antofagasta, Chile"
    },
    {
      img: "https://images.unsplash.com/photo-1562796374-8bd211f81cbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VpemF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      título: "Glaciar",
      descripción: " Switzerland"
    },

    {
      img: "https://images.unsplash.com/photo-1568556486596-9e8ad965c80b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      título: "Montañas",
      descripción: " Omiš, Croatia"
    },

    {
      img: "https://images.unsplash.com/photo-1583422095309-55daabc9cc78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbGlhfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      título: "Fontana Di Trevi",
      descripción: "Roma, Italia"
    },

    {
      img: "https://images.unsplash.com/photo-1564420179789-ede909db4882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmNpYXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      título: "Eiffel",
      descripción: " París, Francia"
    },

    {
      img: "https://images.unsplash.com/photo-1559722746-9faf25bfa805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUMzJUExbXN0ZXJkYW18ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      título: "Zuiderkerk",
      descripción:"Amsterdam, Netherlands"
    },

  ]


  return (
    <div className="App">

      <Header título={título}> </Header>

      <section className='ContainerGalería'>
        <div className='row'>
          <div className='col-sm-12 col-lg-4'>
            <Card galería={data[0]}></Card>
          </div>

          <div className='col-sm-12 col-lg-4'>
            <Card galería={data[1]}></Card>
          </div>

          <div className='col-sm-12 col-lg-4'>
            <Card galería={data[2]}></Card>
          </div>

          <div className='col-sm-12 col-lg-4'>
            <Card galería={data[3]}></Card>
          </div>

          <div className='col-sm-12 col-lg-4'>
            <Card galería={data[4]}></Card>
          </div>

          <div className='col-sm-12 col-lg-4'>
            <Card galería={data[5]}></Card>
          </div>

        </div>
      </section>

      <Footer></Footer>

    </div>
  )
}

export default App
