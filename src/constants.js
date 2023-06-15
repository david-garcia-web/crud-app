// Form parameters: 

const INPUT_NAMES = ["Cantidad", "Producto", "Nombre", "Email", "Telefono"];	// Defines properties of stored objects
		
		// Regex
const INPUT_PATTERNS = ["^[0-9]+$|^0$",								// Positive Number
						"^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$",			// No special chars
					  	"^[A-Z][a-z]+([ ][A-Z][a-z]+)*$",			// Words  
					  	"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",	// Email
					  	"^[0-9]{1,3}-[0-9]{3}-[0-9]{3}-[0-9]{4}$"];	// Telephone 
 
const INPUT_PLACEHOLDER = [	"1",
							"nombre", 
							"Nombre Apellido",
							"user@host.domain", 
							"1-100-200-3000" ];
							
// Labels
const TEXT_LABEL = { header: "Inventario",
					 create: "Ingresar",
					 delete: "Eliminar",
					 clear: "Limpiar", 
					 update: "Cambiar",
					 select: "Seleccionar" };
					
	// Popup messages for buttons
const BUTTON_TOOLTIP = { create: "Ingresar un registro nuevo",
					 	 delete: "Eliminar el registro seleccionado",
					 	 clear: "Vaciar el formulario", 
					 	 update: "Cambiar el registro seleccionado",
					 	 select: "Enfocarse en este registro" };

export { INPUT_NAMES, INPUT_PATTERNS, INPUT_PLACEHOLDER, TEXT_LABEL, BUTTON_TOOLTIP };
