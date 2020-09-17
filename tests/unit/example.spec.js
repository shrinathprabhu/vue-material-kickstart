/**
 * All your unit test cases go here
 * Note that this kickstarter uses Jest as the testing tool. Write your test cases accordingly
 * Write all end to end test cases in tests/e2e which uses cypress tool for testing
 */

import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
