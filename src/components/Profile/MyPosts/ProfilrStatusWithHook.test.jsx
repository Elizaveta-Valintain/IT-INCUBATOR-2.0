import renderer, {act} from "react-test-renderer";
import ProfileStatusWithHook from "./ProfilrStatusWithHook";

describe("ProfileStatusWithHook component", () => {
    test("status from props should be in the state", () => {
        const component = renderer.create(<ProfileStatusWithHook status={"ReactJS"}/>)
        expect(component.toTree().props.status).toBe("ReactJS")
    })

    test("after creation span should be displayed with correct status", () => {
        const component = renderer.create(<ProfileStatusWithHook status={"ReactJS"}/>)
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("ReactJS")
    })

    test("after creation span should be displayed with correct status not null", () => {
        const component = renderer.create(<ProfileStatusWithHook status={"ReactJS"}/>)
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })

    test("after creation input shouldn't be displayed", () => {
        const component = renderer.create(<ProfileStatusWithHook status={"ReactJS"}/>)
        const root = component.root
        expect(() => {
            root.findByType("input")
        }).toThrow()
    })

    test("input should be displayed in editMode instead of span", () => {
        const component = renderer.create(<ProfileStatusWithHook status={"ReactJS"}/>)
        const root = component.root
        act(() => {
            let span = root.findByType("span")
            span.props.onDoubleClick()
        })
        let input = root.findByType("input")
        expect(input.props.value).toBe("ReactJS")
    })

    // test("callback should be called", () => {
    //     const mockCallback =  jest.fn()
    //
    //     const component = renderer.create(<ProfileStatusWithHook status={"ReactJS"} updateStatus={mockCallback}/>)
    //     const instance = component.getInstance()
    //     instance.deactivateEditMode()
    //     expect(mockCallback.mock.calls).toBe(1)
    // })

})
