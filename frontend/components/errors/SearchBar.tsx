import styles from './SearchBar.module.css';
export interface SearchBarProps {
   filter: string;
   setFilter: any;
}

const searchBar = ({ filter, setFilter }: SearchBarProps) => {
   return (
      <input
         className={styles.searchBar}
         type="text"
         value={filter}
         onChange={(e) => {
            let newFilter = e.currentTarget.value;
            newFilter.length < 1
               ? setFilter('')
               : setFilter(newFilter.toLocaleLowerCase());
         }}
         placeholder="Search..."
      />
   );
};
export default searchBar;
