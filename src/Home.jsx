import React, { Component } from 'react'

export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
              no:'',
              pesan:''
            }
        }
    }



    _handleFormChange = (event) => {
        let formData = { ...this.state.form }
        formData[event.target.name] = event.target.value;
        this.setState({
            form: formData
        })
    }

    render() {
        return (
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Kirim Pesan Whatsapp Tanpa Simpan Kontak</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="">
                                Nomor yang dituju
                      </label>
                            <input type="number" name="no" id="" className="form-control" value={this.state.form.no} onChange={this._handleFormChange} />
                            <small className="text-warning">Gunakan awalan 62 jangan 0</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">
                                Isi Pesan
                      </label>
                            <textarea name="pesan" className="form-control" id="" cols="30" rows="10" value={this.state.form.pesan} onChange={this._handleFormChange}></textarea>
                        </div>
                        <div className="text-right">
                            <a href={`https://api.whatsapp.com/send?phone=${this.state.form.no}&text=${this.state.form.pesan}`} className="btn btn-success">Kirim Pesan</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
