export default function Sidebar() {
    return (
        <>
            {/* Logo Icon Start */}
                <div className="logo-icon">
                    <a href="/"><h1>WAREHOUSE</h1></a>
                </div>
            {/* Logo Icon End */}

            {/* Sidebar Navigasi Start */}
                <div className="sidebars-nav">
                    {/* Sidebar Main Start */}
                        <div className="sidebar-main">
                            <div className="side-bar">
                                <ul>
                                    <li><a href="/" className="active"><i className="bi-columns-gap"></i> <label htmlFor="">&nbsp;&nbsp;&nbsp; Dashboard</label></a></li>
                                    <li><a href="/warehouse"><i className="bi-buildings"></i> <label htmlFor="">&nbsp;&nbsp;&nbsp; Warehouse</label></a></li>
                                    <li><a href="/"><i className="bi-box-seam"></i> <label htmlFor="">&nbsp;&nbsp;&nbsp; Products</label></a></li>
                                    <li><a href="/"><i className="bi-x-diamond"></i> <label htmlFor="">&nbsp;&nbsp;&nbsp; Products Category</label></a></li>
                                    <li><a href="/"><i className="bi-cash"></i> <label htmlFor="">&nbsp;&nbsp;&nbsp; Discount</label></a></li>
                                    <li><a href="/"><i className="bi-people"></i> <label htmlFor="">&nbsp;&nbsp;&nbsp; User Management</label></a></li>
                                </ul>
                            </div>
                        </div>
                    {/* Sidebar Main End */}

                    <hr />

                    {/* Sidebar Extra Start */}
                        <div className="sidebar-extra">
                            <div className="side-bar">
                                <ul>
                                    <li><a href="/"><i className="bi-person-circle"></i> <label htmlFor="">&nbsp;&nbsp;&nbsp; Profile</label></a></li>
                                    <li><a href="/"><i className="bi-gear"></i> <label htmlFor="">&nbsp;&nbsp;&nbsp; Settings</label></a></li>
                                </ul>
                            </div>
                        </div>
                    {/* Sidebar Extra End */}
                </div>
            {/* Sidebar Navigasi End */}
        </>
    );
}