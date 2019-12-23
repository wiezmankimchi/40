import React, {createContext, useState, useContext} from "react";



const initialContext = {
    style: 'light'
    visible: true,
    toggleStyle: () => {
        
        setStyle(style => ( style === "light" ? "dark" :"light"))
    }
}


export const SiteContext = createContext(null)





// use the folllowing to create the breadcrumbs
// present: siteContext.breadcrumb.join(" / ")
// remove the last: siteContext.breadcrumb.pop()
// add a new one: siteContext.breadcrumb.push(NEW_VALUE)
