import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Project = () => {
  let ur = 'data.json'
  let [p, setP] = useState([])
  useEffect(() => {
    fetch(ur)
      .then(res => res.json())
      .then(data => {
        setP(data.data)
      }
      )

  }, [])
  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (project) => {
    setSelectedProject(project);
    const modal = document.getElementById('my_modal_1');
    if (!modal) {
      return
    }
    else {
      modal.showModal();
    }

  };


  return (
    <div>
      <div className='text-center mb-12'>
        <h1 className='uppercase font-extrabold text-center text-5xl py-10'>All Project</h1>
        <div className="stats shadow ">

          <div className="stat">
            <div className="stat-title">Current Projects</div>
            <div className="stat-value">
              <CountUp
                end={p.length}
                duration={7}></CountUp>
            </div>
          </div>

        </div>
      </div>

      <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-2 mt-5  gap-y-4 '>

        {
          p.map(proj =>
            <div className="card w-full max-w-full md:max-w-md bg-base-100 shadow-xl" key={proj.id}>
              <figure ><img src={proj.image} alt="Shoes" className='w-full h-[200px] object-top object-cover hover:object-bottom duration-[2s]' /> </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {proj.name}
                </h2>

                <p className='rounded-lg w-full bg-base-200 p-2'> <span className='font-bold'>View live :</span> <a href={proj.livelink}>{proj.livelink}</a>  </p>
                <div className="card-actions justify-end mt-5 ">
                  <button className='btn btn-warning w-full' onClick={() => openModal(proj)}>
                    View Details
                  </button>


                </div>
              </div>
            </div>
          )
        }
        {selectedProject ? (<dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">{selectedProject.name}</h3>
            <p className="py-4">

              {selectedProject.description}
            </p>
            <p className='font-bold'>Technology Used</p>
            <ul className='list-item'>
              <li>{selectedProject.features[0]}</li>
              <li>{selectedProject.features[1]}</li>
              <li>{selectedProject.features[2]}</li>
              <li>{selectedProject.features[3]}</li>
              <li>{selectedProject.features[4]}</li>
            </ul>
            <p className='pt-2 font-bold'>Github Code link</p>
            <a href={selectedProject.code}> {selectedProject.code}</a>
            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>) : (<dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <div>
              <span className="loading loading-ring loading-lg"></span>

            </div>

            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>)
        }
      </div>
    </div>
  );

};

export default Project;