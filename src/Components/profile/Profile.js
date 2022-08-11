import "./profile.css";
import image from "../../assets/images/24bf04b2d02a8db5fa54cc0544016943.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <>
      <div class="main-wrapper">
        <div>
          <div class="page-wrapper">
            <div class="content container-fluid">
              <div>
                <div class="page-header">
                  <div class="row">
                    <div class="col-sm-12">
                      <h3 class="page-title">Profile</h3>
                      <ul class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="/dashboard">
                            <b>Dashboard</b>
                          </a>
                        </li>
                        <li class="breadcrumb-item active">Profile</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <div class="profile-header">
                      <div class="row align-items-center">
                        <div class="col-auto profile-image">
                          {/* <a href="#"> */}
                          <img class="rounded-circle" alt="User" src={image} />
                          {/* </a> */}
                        </div>
                        <div class="col ml-md-n2 profile-user-info">
                          <h4 class="user-name mb-0">John Doe</h4>
                          <h6 class="text-muted">UI/UX Design Team</h6>
                          <div class="user-Location">
                            <FontAwesomeIcon icon={faLocationDot} />
                            Florida, United States
                          </div>
                          <div class="about-text">
                            Lorem ipsum dolor sit amet.
                          </div>
                        </div>
                        <div class="col-auto profile-btn">
                          <a href="" class="btn btn-primary">
                            Edit
                          </a>
                        </div>
                      </div>
                    </div>
                    <nav class="profile-menu nav nav-tabs" role="tablist">
                      <a
                        id="uncontrolled-tab-example-tab-about"
                        href="#"
                        role="tab"
                        data-rb-event-key="about"
                        aria-controls="uncontrolled-tab-example-tabpane-about"
                        aria-selected="true"
                        class="nav-item nav-link active"
                      >
                        About
                      </a>
                      <a
                        id="uncontrolled-tab-example-tab-password"
                        href="#"
                        role="tab"
                        data-rb-event-key="password"
                        aria-controls="uncontrolled-tab-example-tabpane-password"
                        aria-selected="false"
                        class="nav-item nav-link"
                      >
                        Password
                      </a>
                    </nav>
                    <div class="tab-content">
                      <div
                        id="uncontrolled-tab-example-tabpane-about"
                        aria-labelledby="uncontrolled-tab-example-tab-about"
                        role="tabpanel"
                        aria-hidden="false"
                        class="fade tab-pane active show"
                      >
                        <div class="row">
                          <div class="col-lg-9">
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex justify-content-between card-title h5">
                                  <span>Personal Details</span>
                                  <a
                                    class="edit-link"
                                    data-toggle="modal"
                                    href="#edit_personal_details"
                                  >
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    Edit
                                  </a>
                                </div>
                                <div class="row">
                                  <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                    Name
                                  </p>
                                  <p class="col-sm-9">John Doe</p>
                                </div>
                                <div class="row">
                                  <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                    Date of Birth
                                  </p>
                                  <p class="col-sm-9">24 Jul 1983</p>
                                </div>
                                <div class="row">
                                  <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                    Email ID
                                  </p>
                                  <p class="col-sm-9">johndoe@example.com</p>
                                </div>
                                <div class="row">
                                  <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                    Mobile
                                  </p>
                                  <p class="col-sm-9">305-310-5857</p>
                                </div>
                                <div class="row">
                                  <p class="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">
                                    Address
                                  </p>
                                  <p class="col-sm-9 mb-0">
                                    4663 Agriculture Lane,
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-3">
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex justify-content-between card-title h5">
                                  <span>Account Status</span>
                                  <a class="edit-link" href="#">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    Edit
                                  </a>
                                </div>
                                <button class="btn btn-success" type="button">
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    color="white"
                                  />
                                  Active
                                </button>
                              </div>
                            </div>
                            <div class="card">
                              <div class="card-body">
                                <div class="d-flex justify-content-between card-title h5">
                                  <span>Skills</span>
                                  <a class="edit-link" href="#">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    Edit
                                  </a>
                                </div>
                                <div class="skill-tags">
                                  <span>Html5</span>
                                  <span>CSS3</span>
                                  <span>WordPress</span>
                                  <span>Javascript</span>
                                  <span>Android</span>
                                  <span>iOS</span>
                                  <span>Angular</span>
                                  <span>PHP</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="uncontrolled-tab-example-tabpane-password"
                        aria-labelledby="uncontrolled-tab-example-tab-password"
                        role="tabpanel"
                        aria-hidden="true"
                        class="fade tab-pane"
                      >
                        <div class="card">
                          <div class="card-body">
                            <div class="card-title h5">Change Password</div>
                            <div class="row">
                              <div class="col-lg-6 col-md-10">
                                <form>
                                  <div class="form-group">
                                    <label>Old Password</label>
                                    <input
                                      type="password"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group">
                                    <label>New Password</label>
                                    <input
                                      type="password"
                                      class="form-control"
                                    />
                                  </div>
                                  <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                      type="password"
                                      class="form-control"
                                    />
                                  </div>
                                  <button class="btn btn-primary" type="submit">
                                    Save Changes
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
