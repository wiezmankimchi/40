import React from 'react'

import { useGlobal } from "../store/mainStore";

export default function OptionA() {
    const [store, actions] = useGlobal();
    return (
        <div>
            {/* <div>state is: <em>{state.toString()}</em></div> */}
            <div>visible is: <em>{store.visible.toString()}</em></div>
            {/* <div><button onClick={()=>setstate(!state)}>Click</button></div> */}
            <div><button onClick={() => actions.setVisible()}>Click This</button></div>
            <div><button onClick={() => actions.setBreadcrumb(["Home","OptionA"])}>BreadCrumb</button></div>
        </div>
    )
}


