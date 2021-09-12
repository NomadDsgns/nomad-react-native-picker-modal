# [Nomad Dsgns](https://www.nomaddsgns.com) Modal with picker #
Custom React Native modal with picker input included

## Instructions for Use ##
1. Install FontAwesome: npm install -save @react-native-picker/picker
2. Clone Component to project:
    - Command Line: git clone https://github.com/NomadDsgns/nomad-react-native-picker-modal.git
    - -or- Copy and paste code into new file
3. Import into file where it's to be used in the project:
    - Add to top of file where component will be used: import NomadPickerModal from './NomadPickerModal.js
4. Add component into project code and pass in required/desired props:
    - label (optional) - Label for the picker input field
    - values (required) - Array of value strings to assign to each items value
    - selectedValue (optional) - default value to show as selected on modal open (defaults to first item in array if not provided)
    - visible (required) - state variable to dictate whether modal is visible or not (true or false)
    - handleChange (required) - function to handle changing of value selected
    - handleSubmit (required) - function for handling the submitting of the modal


### Example usage ###

```

```
