 
 function customRender(reactElement,container){
//     const domelement = document.createElement(reactElement.type)
//    domelement.innerHTML = reactElement.children
//    domelement.setAttribute('href', reactElement.props.href)
//    domelement.setAttribute('target', reactElement.props.target)

//    container.appendChild(domelement)



   const domelement = document.createElement(reactElement.type)
     domelement.innerHTML = reactElement.children

     for (const prop in domelement.props) {
          if(prop=== 'children') continue
           domelement.setAttribute(prop, reactElement.props[prop])
            
        }

        container.appendChild(domelement)
  }
 






const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit googlle'
}
const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)