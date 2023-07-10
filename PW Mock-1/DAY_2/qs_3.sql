                -------------------------
                |      Execution        |
                |        Context        |
                -------------------------
                |   Variable Object     |
                -------------------------
                |   Scope Chain         |
                -------------------------
                |   This Value          |
                -------------------------


1. Execution Context: The main container that holds all the necessary information for executing a piece of code. It consists of three components: the Variable Object, the Scope Chain, and the This Value.

2. Variable Object: Also known as the Activation Object, it holds all the variables, function declarations, and function arguments for the current execution context. Variables are stored as properties of the Variable Object.

3. Scope Chain: The scope chain is a list of Variable Objects that represents the lexical scope hierarchy. It allows the code to access variables from outer environments. The scope chain is used for variable lookup during execution.

4. This Value: The "this" value refers to the context in which a function is executed. It can vary depending on how the function is called. It is determined dynamically each time a function is invoked.