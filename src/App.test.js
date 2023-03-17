
import {render,screen} from '@testing-library/react'
import App from './App'
describe("App Creeen Testing",()=>{

    test("Test Heading",()=>{
        
        render(<App/>);
        var heading=screen.getByText("Testing Demo App")
        expect(heading).toBeInTheDocument();

    });
    test("Test Heading",()=>{
        
        render(<App/>);
        var heading=screen.getByText("Testing1 Demo App")
        expect(heading).toBeInTheDocument();

    })
})