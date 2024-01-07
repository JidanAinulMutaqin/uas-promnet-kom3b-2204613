import React, { Component } from "react";
import UserService from "../services/UserService";
import { FaPen, FaPlus, FaArrowCircleLeft } from 'react-icons/fa';
import Modal from 'react-modal';

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      id: this.props.match.params.id,
      user: {},
    };

    // this.editUser = this.editUser.bind(this);
    // this.deleteUser = this.deleteUser.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  // editUser(id){
  //   this.props.history.push(`/add-user/${id}`);
  // }

  // deleteUser(id) {
  //   const confirmDelete = window.confirm('Yakin ingin menghapus data ini?');

  //   if (confirmDelete) {
  //       UserService.deleteUser(id).then((res) => {
  //           this.setState(
  //               {
  //                   users: this.state.users.filter((user) => user.id !== id),
  //                   showModal: true, // Show modal on successful delete
  //               }
  //               // () => {
  //               //     // setTimeout(this.closeModal, 5000);
  //               // }
  //           );
  //       });
  //   }
  // }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      // <div>
      //   <br></br>
      //   <div className="card col-md-6 offset-md-3">
      //     <h3 className="text-center">View User Details</h3>
      //     <div className="card-body">
      //       <div className="row">
      //         <label> Judul Buku: </label>
      //         <div> {this.state.user.judul_buku}</div>
      //       </div>
      //       <div className="row">
      //         <label> Jumlah: </label>
      //         <div> {this.state.user.jumlah}</div>
      //       </div>
      //       <div className="row">
      //         <label> Nama Peminjam: </label>
      //         <div> {this.state.user.nama_peminjam}</div>
      //       </div>
      //       <div className="row">
      //         <label> Alamat Peminjam: </label>
      //         <div> {this.state.user.alamat_peminjam}</div>
      //       </div>
      //       <div className="row">
      //         <label> No HP Peminjam: </label>
      //         <div> {this.state.user.noHP_peminjam}</div>
      //       </div>
      //       <div className="row">
      //         <label> Tanggal Pinjam: </label>
      //         <div> {this.state.user.tanggal_pinjam}</div>
      //       </div>
      //       <div className="row">
      //         <label> Tanggal Pengembalian: </label>
      //         <div> {this.state.user.tanggal_pengembalian}</div>
      //       </div>
      //       <div className="row">
      //         <label> Lama Pinjam: </label>
      //         <div> {this.state.user.lama_pinjam}</div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div class="bg-light p-3 mb-2 mt-4">
        <div class="container mt-4 ">
          <div class="d-flex justify-content-between">
            <div>
              <br />
              <h3>Detail Peminjaman Buku</h3>
              <hr></hr>
            </div>

            {/* <button
              class="btn btn btn-success p-1  m-1 md-3 mb-4"
              onClick={() => this.editUser(user.id)}
            >
              <FaPen /> Update
            </button>
            <button
              class="btn btn btn-danger p-1  m-1 md-3 mb-4"
              onClick={() => this.deleteUser(user.id)}
            >
              <FaTrashAlt /> Hapus
            </button> */}
          </div>
        </div>

        <div class="container p-3 my-3 bg-white">
          <table class="table table-sm table-bordered table-hover">
            <tbody>
                <tr>
                  <td><b>ID</b></td>
                  <td>{this.state.user.id}</td>
                </tr>
                <tr>
                  <td><b>Judul Buku</b></td>
                  <td>{this.state.user.judul_buku}</td>
                </tr>
                <tr>
                  <td><b>Jumlah</b></td>
                  <td>{this.state.user.jumlah}</td>
                </tr>
                <tr>
                  <td><b>Nama Peminjam</b></td>
                  <td>{this.state.user.nama_peminjam}</td>
                </tr>
                <tr>
                  <td><b>Alamat Peminjam</b></td>
                  <td>{this.state.user.alamat_peminjam}</td>
                </tr>
                <tr>
                  <td><b>No HP</b></td>
                  <td>{this.state.user.noHP_peminjam}</td>
                </tr>
                <tr>
                  <td><b>Tanggal Pinjam</b></td>
                  <td>{this.state.user.tanggal_pinjam}</td>
                </tr>
                <tr>
                  <td><b>Tanggal Pengembalian</b></td>
                  <td>{this.state.user.tanggal_pengembalian}</td>
                </tr>
                <tr>
                  <td><b>Lama Pinjam</b></td>
                  <td>{this.state.user.lama_pinjam}</td>
                </tr>
            </tbody>
          </table>
        </div>
        <a class="btn btn-danger" href="/inventory"><FaArrowCircleLeft /> Back</a>
      </div>
    );
  }
}

export default ViewUserComponent;
