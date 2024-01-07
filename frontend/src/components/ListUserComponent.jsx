import React, { Component } from 'react'
import Modal from 'react-modal';
import UserService from '../services/UserService'
import { FaPen, FaPlus, FaTrashAlt, FaInfoCircle } from 'react-icons/fa';

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: [],
                showModal: false,
                search: '',
        }

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    deleteUser(id) {
        const confirmDelete = window.confirm('Yakin ingin menghapus data ini?');

        if (confirmDelete) {
            UserService.deleteUser(id).then((res) => {
                this.setState(
                    {
                        users: this.state.users.filter((user) => user.id !== id),
                        showModal: true, // Show modal on successful delete
                    }
                    // () => {
                    //      setTimeout(this.closeModal, 5000);
                    // }
                );
            });
        }
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    viewUser(id){
        this.props.history.push(`/view-inventory/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-inventory/${id}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            if(res.data==null)
            {
                this.props.history.push('/add-inventory/_add');
            }
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-inventory/_add');
    }

    handleSearchChange(event) {
        this.setState({ search: event.target.value });
    }

    handleSearchSubmit(event) {
        event.preventDefault();
        // Lakukan pencarian di sini, misalnya panggil metode pencarian di UserService
        // UserService.searchUsers(this.state.search).then((res) => {
        //   this.setState({ users: res.data });
        // });
        // Simpan di sini untuk menunjukkan implementasi sederhana
        const searchResults = this.state.users.filter(
          (user) =>
            user.nama_peminjam.toLowerCase().includes(this.state.search.toLowerCase())
        );
        this.setState({ users: searchResults });
    }

    render() {
        return (
            <div class="bg-light p-3 mb-2 mt-4">

                <div class="container mt-4 ">
                    <div class="d-flex justify-content-between">

                        <div>
                            <h3>Data Peminjaman Buku</h3>
                            <hr></hr>
                        </div>

                        <form onSubmit={this.handleSearchSubmit} class="d-flex p-2">
                            <input
                                name="search"
                                type="search"
                                class="form-control me-2 p-1 m-1"
                                autoComplete="off"
                                placeholder="Nama Peminjam.."
                                value={this.state.search}
                                onChange={this.handleSearchChange}
                            ></input>
                            <button
                                name="cari"
                                type="submit"
                                class="btn btn-sml btn-dark p-1 m-1 md-3 mb-4 text-white"
                            >
                                Search
                            </button>
                        </form>
                        <br></br>
                
                        <button class="btn btn-outline-primary p-1  m-1 md-3 mb-4" onClick={this.addUser}><FaPlus /> Add Data</button>

                    </div>
                </div>


                <div class="container p-3 my-3 bg-white">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Judul Buku</th>
                            <th scope="col">Jumlah</th>
                            <th scope="col">Nama Peminjam</th>
                            <th scope="col">Alamat Peminjam</th>
                            <th scope="col">No HP</th>
                            <th scope="col">Tanggal Pinjam</th>
                            <th scope="col">Tanggal Pengembalian</th>
                            <th scope="col">Lama Pinjam</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                            <td>
                                                {user.id}
                                            </td>
                                            <td>
                                                {user.judul_buku}
                                            </td>
                                            <td>
                                                {user.jumlah}
                                            </td>
                                            <td>
                                                {user.nama_peminjam}
                                            </td>
                                            <td>
                                                {user.alamat_peminjam}
                                            </td>
                                            <td>
                                                {user.noHP_peminjam}
                                            </td>
                                            <td>
                                                {user.tanggal_pinjam}
                                            </td>
                                            <td>
                                                {user.tanggal_pengembalian}
                                            </td>
                                            <td>
                                                {user.lama_pinjam}
                                            </td>
                                             <td>
                                                <button style={{marginBottom: "2px"}} onClick={ () => 
                                                    this.editUser(user.id)} 
                                                    className="btn btn-success"><FaPen /> Update 
                                                </button>
                                                <button style={{marginBottom: "2px"}}
                                                    onClick={ () => this.deleteUser(user.id)} 
                                                    className="btn btn-danger" ><FaTrashAlt /> Hapus   
                                                </button>
                                                <button  
                                                    onClick={ () => this.viewUser(user.id)}
                                                    className="btn btn-warning"><FaInfoCircle /> View   
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                    </table>
                </div>
                {/* Modal Alert Deleted */}
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Data Deleted"
                    className="delete-modal" 
                    overlayClassName="delete-overlay" 
                >
                    <div className="deleteModal-content">
                        <h4>Pemberitahuan</h4>
                        <p>Data telah berhasil dihapus!</p>
                        <button className="btn-close" onClick={this.closeModal}>Close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ListUserComponent
