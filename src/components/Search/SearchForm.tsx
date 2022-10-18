import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const SearchForm: React.FC = () => {
    return (
      <form>
        <SearchInput></SearchInput>
        <SearchButton></SearchButton>
      </form>
    );
  };
  export default SearchForm;