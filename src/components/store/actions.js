// import _ from 'lodash'

const actions = {
  setStyle: store=> {
    const newStyle=store.style==='light' ? 'dark' : 'light'
    store.setState({style: newStyle})

  },
  setVisible: store=> {
    const newVisible=!store.state.visible
    store.setState({visible: newVisible})

  },
  setBreadcrumb: (store, crumbs)=> {
    store.setState({breadcrumb: crumbs})
  },
  // setFilterSymbol: (store, col, symbol) => {
  //   const nextCols = [...store.state.cols]
  //   const index = nextCols.findIndex(p => p.column_name === col)
  //   nextCols[index]["filter"]["symbol"]=symbol
  //   store.setState({cols: nextCols})
  // },
  // setFilterValue: (store, col, value) => {
  //   const nextCols = [...store.state.cols]
  //   const index = nextCols.findIndex(p=> p.column_name === col)
  //   nextCols[index]["filter"]["value"]=value
  //   store.setState({cols: nextCols})
  // },
  // setSort: (store, col) => {
  //   console.log("action-setSort", col, col.sort)
  //   const nextCols = [...store.state.cols]
  //   const index = nextCols.findIndex(p=> p.column_name === col)
  //   console.log(nextCols[index])
  //   if (nextCols[index]["sort"]===undefined||nextCols[index]["sort"]===""){
  //       nextCols[index]["sort"]="asc"
  //     }else{
  //       if(nextCols[index]["sort"]==="asc"){
  //         nextCols[index]["sort"]="desc"
  //       }else {
  //         if(nextCols[index]["sort"]==="desc") {
  //           nextCols[index]["sort"]=""

  //         }

  //       }
        
  //     }

  //   store.setState({cols: nextCols})
  // },
  // addCols: (store, col) => {
  //   store.setState({cols: [...store.state.cols, col] })
  // },
  // removeCols: (store, col) => {
  //   const nextCols = store.state.cols.filter(column => column.column_name !== col.column_name)
  //   store.setState({cols: nextCols})
  // }, 
  // moveColUp: (store, col) =>{
  //   const nextCols = [...store.state.cols]
  //   const index = nextCols.findIndex(p => p.column_name === col.column_name)
  //   const current = nextCols[index]
  //   nextCols[index] = nextCols[index - 1]
  //   nextCols[index - 1] = current
  //   store.setState({cols: nextCols})
  // },
  // moveColDown: (store, col) =>{
  //   const nextCols = [...store.state.cols]
  //   const index = nextCols.findIndex(p => p.column_name === col.column_name)
  //   const current = nextCols[index]
  //   nextCols[index] = nextCols[index + 1]
  //   nextCols[index + 1] = current
  //   store.setState({cols: nextCols})
  // },
  // toggleMenu: store => {
  //   store.setState({ menuShow: !store.state.menuShow });
  // },
  // openModal: store => {
  //   store.setState({ modalOpen: true });
  // },
  // closeModal: (store, e) => {
  //   store.setState({ modalOpen: undefined });
  //   store.setState({ modalData: e });
  // },
  // clearSelectedSchema: store => {
  //   store.setState({ selectedSchema: "" });
  //   store.setState({ cols: []})
  // },
  // clearSelectedTable: store => {
  //   store.setState({ selectedTable: "" });
  //   store.setState({cols: []})
  // },
  // setSelectedSchema: (store, opt) => {
  //   store.setState({ selectedSchema: opt });
  //   store.setState({ selectedTable: "" });
  //   store.setState({ cols: [] });
  //   store.setState({ offset: 0 });
  // },
  // setSelectedTable: (store, tbl) => {
  //   store.setState({ selectedTable: tbl });
  //   store.setState({ cols: [] });
  //   store.setState({ offset: 0 });
  // },
  // addSelectedFields: (store, field) => {
  //   const nextList = [...store.state.selectedFields];
  //   nextList.push(field);
  //   store.setState({ selectedFields: nextList });
  // },
  // removeSelectedField: (store, field) => {
  //   const nextList = [...store.state.selectedFields].filter(item => item !== field);
  //   store.setState({selectedFields: nextList})
  // },
  // updateOffset: (store, offset) => {
  //   store.setState({offset: offset})
  // }
};

export default actions;
