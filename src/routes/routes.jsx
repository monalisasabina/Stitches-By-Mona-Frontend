const routes = [

    {
      path: "/",
      element:<App />,
      errorElement:<ErrorPage/>,
      children: [
        { path: "/", element: <Home /> },
        
      ] 
    },
]

export default routes;