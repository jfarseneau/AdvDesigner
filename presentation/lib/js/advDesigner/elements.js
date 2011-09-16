/**
 * @author JF
 */

function elementController(setID) {
	// Controls all elements on the screen.
	/*--------------------------Properties----------------------------------------
	 * Property Name		| Type					| Description
	 * ---------------------------------------------------------------------------
	 * + controllerID					:		|  
	 ----------------------------------------------------------------------------*/

	// Getters and Setters
	
	// Constructor
	

	this.controllerID = "";
	this.elements = new Array();
	this.elementCount = -1;

	/*--------------------------Methods-------------------------------------------
	 * Method Name				| Parameters 		| Return Type	| Description
	 * ---------------------------------------------------------------------------
	 * +stopAll					()					: errorCode		| 
  	 ------------------------------------------------------------------------------
  	 * */
  	  	
  	this.loadElementSet = function() {
  		// TODO: Set Element Load from database
  	}
  	
  	this.addElement = function(elementName, elementType, elementText) {
  		
  		this.elementCount++;
  		this.elements[this.elementCount] = new element(elementName, elementType, elementText);
  		currentElement = this.elements[this.elementCount]
  		  		
  		var boxContent = document.getElementById("elementBox").innerHTML;
  		boxContent += currentElement.html;	
  		document.getElementById("elementBox").innerHTML = boxContent;
  		
  		this.makeDraggables();
  	}
  	
  	this.deleteElement = function(elementID) {
  		// TODO: Delete specified element
  	}
  	
  	this.makeDraggables = function() {
	// Loop through the elements to make them all Draggables every time one is created, due to weird bug that disables all other elements draggables.
		var i=0;
		while (i<=this.elementCount) {
			new Draggable(this.elements[i].name,{
    		snap: function(x,y,draggable) {
      		function constrain(n, lower, upper) {
        		if (n > upper) return upper;
        		else if (n < lower) return lower;
        		else return n;
      		}
     
      		element_dimensions = Element.getDimensions(draggable.element);
      		parent_dimensions = Element.getDimensions(draggable.element.parentNode);
      		return[
      			constrain(x, 0, parent_dimensions.width - element_dimensions.width),
        		constrain(y, 0, parent_dimensions.height - element_dimensions.height)];
    		},
    		revert:false});
    		
			i++;
		}
	

    }
}

function element(elementName, elementType, elementText) {
		// Controls all elements on the screen.
	/*--------------------------Properties----------------------------------------
	 * Property Name		| Type					| Description
	 * ---------------------------------------------------------------------------
	 * + 					:		|  
	 ----------------------------------------------------------------------------*/

	// Constructor

	this.name  = elementName;
	this.type = elementType;
	this.text = elementText;

	
	// Getters and Setters
	
	this.__defineGetter__('html', function() {
 		htmlString = '<div class="'+ elementType +'Element" id="'+ elementName +'" style="position: absolute;">'+ elementText +'</div>';
 		return htmlString;
	});
	
    this.__defineSetter__('html', function() {
	});
}
