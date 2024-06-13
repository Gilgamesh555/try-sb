import Search from './search.component';
export * from './search.component';
export default Search;
declare global {
    interface HTMLElementTagNameMap {
        'koerber-search': Search;
    }
}
