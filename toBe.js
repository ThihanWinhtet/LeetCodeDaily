var expect = function(val) {
    return {
        toBe : function(comp){
            if(val === comp){
                return true;
            }else{
                throw new Error("Not Equal");
            }
        },
        notToBe : function(comp){
            if(val !== comp){
                return true;
            }else{
                throw new Error("Equal");
            }
        }
    }
};