import { Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    }
    componentDidMount() {
        //sending http request...
        this.setState({ filteredUsers: DUMMY_USERS });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm === this.state.searchTerm) return;
        this.setState({ filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)) });
    }
    searchChangeHandler = (event) => {
        this.setState({ searchTerm: event.target.value });
    };
    render() {
        return (
            <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                <Users users={this.state.filteredUsers} />
            </div>
        );
    }
}

//const UserFinder = () => {
//    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//    const [searchTerm, setSearchTerm] = useState('');

//    useEffect(() => {
//        setFilteredUsers(
//            DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//        );
//    }, [searchTerm]);

//    const searchChangeHandler = (event) => {
//        setSearchTerm(event.target.value);
//    };

//    return (
//        <div className={classes.finder}>
//            <input type='search' onChange={searchChangeHandler} />
//            <Users users={filteredUsers} />
//        </div>
//    );
//};

export default UserFinder;