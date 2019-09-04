# materialui-readonly-datepicker

```
git close https://github.com/agonzalezjr/materialui-readonly-datepicker.git
cd materialui-readonly-datepicker
npm run i
npm run start
```

The checkbox controls whether an `open={false}` param is passed to the `DateTimePicker`. 

With this implementation, the following error is printed when the switch is made:

```
Warning: React has detected a change in the order of Hooks called by PickerWithState. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
1. useContext                 useContext
2. useContext                 useContext
3. useState                   useCallback
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    in PickerWithState (at App.tsx:14)
    in MuiPickersUtilsProvider (at App.tsx:40)
    in div (at App.tsx:28)
    in App (at src/index.tsx:7)
    
TypeError: Cannot read property 'length' of undefined
    at areHookInputsEqual (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:15766:1)
    at updateCallback (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:16365:1)
    at Object.useCallback (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:16748:1)
    at useCallback (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react/cjs/react.development.js:1624:1)
    at useOpenState (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/@material-ui/pickers/esm/_shared/hooks/useOpenState.js:22:1)
    at usePickerState (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/@material-ui/pickers/esm/_shared/hooks/usePickerState.js:35:1)
    at PickerWithState (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/@material-ui/pickers/esm/Picker/makePickerWithState.js:62:1)
    at renderWithHooks (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:15821:1)
    at updateFunctionComponent (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:17705:1)
    at beginWork$1 (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:19371:1)
    at HTMLUnknownElement.callCallback (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:363:1)
    at Object.invokeGuardedCallbackDev (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:412:1)
    at invokeGuardedCallback (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:466:1)
    at beginWork$$1 (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:24570:1)
    at performUnitOfWork (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:23505:1)
    at workLoopSync (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:23480:1)
    at renderRoot (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:23155:1)
    at runRootCallback (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:22809:1)
    at /Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:11886:1
    at unstable_runWithPriority (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/scheduler/cjs/scheduler.development.js:674:1)
    at runWithPriority$2 (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:11834:1)
    at flushSyncCallbackQueueImpl (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:11881:1)
    at flushSyncCallbackQueue (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:11869:1)
    at discreteUpdates$1 (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:22941:1)
    at discreteUpdates (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:2440:1)
    at dispatchDiscreteEvent (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:6254:1)
    
TypeError: Cannot read property 'length' of undefined
    at areHookInputsEqual (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:15766:1)
    at updateCallback (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:16365:1)
    at Object.useCallback (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:16748:1)
    at useCallback (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react/cjs/react.development.js:1624:1)
    at useOpenState (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/@material-ui/pickers/esm/_shared/hooks/useOpenState.js:22:1)
    at usePickerState (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/@material-ui/pickers/esm/_shared/hooks/usePickerState.js:35:1)
    at PickerWithState (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/@material-ui/pickers/esm/Picker/makePickerWithState.js:62:1)
    at renderWithHooks (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:15821:1)
    at updateFunctionComponent (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:17705:1)
    at beginWork$1 (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:19371:1)
    at HTMLUnknownElement.callCallback (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:363:1)
    at Object.invokeGuardedCallbackDev (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:412:1)
    at invokeGuardedCallback (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:466:1)
    at beginWork$$1 (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:24570:1)
    at performUnitOfWork (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:23505:1)
    at workLoopSync (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:23480:1)
    at renderRoot (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:23155:1)
    at runRootCallback (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:22809:1)
    at /Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:11886:1
    at unstable_runWithPriority (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/scheduler/cjs/scheduler.development.js:674:1)
    at runWithPriority$2 (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:11834:1)
    at flushSyncCallbackQueueImpl (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:11881:1)
    at flushSyncCallbackQueue (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:11869:1)
    at discreteUpdates$1 (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:22941:1)
    at discreteUpdates (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:2440:1)
    at dispatchDiscreteEvent (/Users/agonzalezjr/code/mirata/materialui-readonly-datepicker/node_modules/react-dom/cjs/react-dom.development.js:6254:1)
```
