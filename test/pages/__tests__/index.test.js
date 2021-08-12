import { shallowMount } from "@vue/test-utils";
import App from '@/pages/index';
import { getData } from "~/service/index.api";

// mock a file
jest.mock('~/service/index.api')

// mock axios
// jest.mock('axios')
// axios.get.mockResolvedValue({data: [{name: 'demo'}]})

describe('test for app', () => {

  it('should correctly render page', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.html()).toMatchSnapshot();
  });

  // you can use mocks to mount App by options when mock current file's function
  // also you can user up axios to mock data
  // it('should correctly call api when render this page', (done) => {
  //   const mockApi = jest.fn(() => Promise.resolve({data: [{name: 'demo'}]}))
  //   const wrapper = shallowMount(App, { mocks: { $axios: { get: mockApi } } })
  //   setTimeout(() => {
  //     expect(mockApi).toBeCalledWith('http://localhost:8000/menu/tree')
  //     expect(wrapper.vm.nodeData).toEqual('demo')
  //     done()
  //   })
  // });

  // mock a file
  it('should correctly call api when render this page', (done) => {
    getData.mockImplementation(() => 'demo')
    const wrapper = shallowMount(App)
    setTimeout(() => {
      expect(getData).toHaveBeenCalled()
      expect(wrapper.vm.nodeData).toEqual('demo')
      done()
    })
  });
})
