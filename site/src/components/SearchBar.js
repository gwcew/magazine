import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

export const SearchBar = (props) => {
    return <>
        <SearchIcon></SearchIcon>
        <InputBase placeholder={props.placeholder} style={{color: 'white'}}>
        </InputBase>
    </>;
};