let traditionalVsArrow = {
    value: "traditionalVsArrow",
    traditionalFunction: function(){
        console.log("Traditional Function: " , this.value) // 'this' refers to the object value.
    },
    arrowFunction: () => {
        console.log("Arrow Function: " , this.value) // 'this' refers to the global value.
    },
}

traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();