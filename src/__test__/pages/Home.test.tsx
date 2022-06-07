/* packages */
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
/* pages */
import Home from "../../pages/index"

it("should render hello text",()=>{
    render(<Home/>)
    expect(screen.getByText("Hello Next.js")).toBeInTheDocument()
})