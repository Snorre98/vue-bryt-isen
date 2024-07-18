import { reactive, ref } from "vue";

interface filterOption {
  label: string;
  value: string;
}

const filterOptions = ref<filterOption[]>([]);
const selectedOptions = ref<{ [key: string]: boolean }>({});

export const filterStore = reactive({
  filterOptions: filterOptions,
  selectedOptions: selectedOptions,
  setSelected() {
    selectedOptions.value = {};
    filterOptions.value?.forEach((option) => {
      selectedOptions.value[option.value] = false;
    });
  },
});
