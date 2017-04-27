function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = new Array();
       if (listA === null || listB === null) {
       	return null;
	   }

	   for (var i = 0; i < listA.length; i++) {
       	var nextValue = listA[i];

       	    for (var j = 0; j < listB.length; j++) {
       	    	if (listB[j] === nextValue) {
       	    		resultList.push(listB[j]);
       	    		break;
				}
			}
	   }
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = new Array();
        var unionA = this.symmetricDifference(listA, listB)
	   var unionB = this.intersection(listA, listB)

		resultList = unionA.concat(unionB);
	   
	   return resultList;
	}



	this.relativeComplement = function(listA, listB) {

	   var resultList = new Array();

        if (listA === null || listB === null) {
            return null;
        }
        for ( var i = 0; i < listA.length; i++) {
            var currentValueA = listA[i];
            for (var j = 0; j < listB.length; j++) {
                var currentValueB = listB[j];
                if (currentValueA === currentValueB) {

                    break;
                }
            }
            if (currentValueA !== currentValueB) {
                resultList.push(currentValueA)
            }
        }
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = new Array();
       
	   var synMaticA = this.relativeComplement(listA, listB)
       var synMaticB = this.relativeComplement(listB, listA)
		for (var i = 0; i < synMaticB.length; i++) {
	   	      synMaticA.push(synMaticB[i]);

		}

		resultList = synMaticA;


	   return resultList;
	}
	

}
