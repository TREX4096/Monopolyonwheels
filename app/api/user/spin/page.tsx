// iske ek piche jaana hai
"use client"
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface Leader {
  id: string;
  rank: number;
  username: string;
  points: number;
}

interface Scenario {
  id: number;
  scenario: string;
  easy: string;
  tough: string;
  spinCommitment: number;
  careerPoints: number;
}

const SCENARIOS: Scenario[] = [
  {
    id: 1,
    scenario: "Pursue Higher Education",
    easy: "Skip higher education",
    tough: "Enroll in a Master's program",
    spinCommitment: 3,
    careerPoints: 6
  },
  {
    id: 2,
    scenario: "Start a New Business",
    easy: "Work for a stable job",
    tough: "Launch a startup with risks",
    spinCommitment: 4,
    careerPoints: 8
  },
  {
    id: 3,
    scenario: "Relocate for a Job Opportunity",
    easy: "Stay in the current city",
    tough: "Move to a new city for a better role",
    spinCommitment: 2,
    careerPoints: 4
  },
  {
    id: 4,
    scenario: "Invest in Skill Development ",
    easy: "Stick with current skills",
    tough: "Enroll in an intensive course",
    spinCommitment: 3,
    careerPoints: 6
  },
  {
    id: 5,
    scenario: "Work-Life Balance",
    easy: "Prioritize work-life balance",
    tough: "Take on a challenging project with longer hours",
    spinCommitment: 2,
    careerPoints: 4
  },
  {
    id: 6,
    scenario: " Career Change",
    easy: "Stay in the current field",
    tough: "Switch to a new industry",
    spinCommitment: 4,
    careerPoints: 8
  },
  {
    id: 7,
    scenario: "Leadership Role",
    easy: "Continue as a team member",
    tough: "Accept a leadership role",
    spinCommitment: 3,
    careerPoints: 6
  },
  {
    id: 8,
    scenario: "Pursue an International Internship",
    easy: "Choose a local opportunity",
    tough: "Apply for a competitive international internship",
    spinCommitment: 5,
    careerPoints: 10
  },
  {
    id: 9,
    scenario: "Financial Investment",
    easy: "Save money in a regular account",
    tough: "Invest in stocks or mutual funds",
    spinCommitment: 2,
    careerPoints: 4
  },
  {
    id: 10,
    scenario: "Community Service",
    easy: "Focus solely on career",
    tough: "Volunteer for a cause",
    spinCommitment: 1,
    careerPoints: 2
  }
];

const INITIAL_LEADERS: Leader[] = [
  { id: '1', rank: 1, username: 'Alice150', points: 150 },
  { id: '2', rank: 2, username: 'Bob120', points: 120 },
  { id: '3', rank: 3, username: 'Charlie100', points: 100 },
];

interface user{
  name:string,
  points:number
}

interface Detail{
  leaderBoard:user[],
  rank:number
}

const CareerDecisionGame = () => {


   const router= useRouter()


  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [careerPoints, setCareerPoints] = useState(0);
  const [spinsLeft, setSpinsLeft] = useState(10);
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [angle, setAngle] = useState(0);
  const [rank, setRank] = useState(4);
  const [detail, setDetail] = useState<Detail | undefined>(undefined);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showGetSpinsModal, setShowGetSpinsModal] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, spins: 10, title: 'Task 1',path:'/api/user/survey1' },
    { id: 2, spins: 10, title: 'Task 2',path:'/api/user/survey2' }
  ]);

  

  const { data: session, status } = useSession();
  const userId = session?.user?.id

  
  const getDetail = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/leaderboard/${userId}/${process.env.NEXT_PUBLIC_ADMIN_ID}`;

      const response = await axios.get(url);
      const data = response.data;
        console.log(data);
        
      setDetail(data);


    } catch (error: any) {
      // Axios error objects contain the response inside error.response
      if (error.response) {
        console.error('Error fetching forms:', error.response.status, error.response.data);
      } else {
        console.error('Error fetching forms:', error.message);
      }
    } finally {
      // setisLoading(false);
  console.log("Function ran");
  
    }
  };
  const handleTaskClick = (path: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event propagation
    setShowGetSpinsModal(false);
    router.push(path);
  };
  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const radius = Math.min(width, height) / 2.2;
    const segments = SCENARIOS.length;
    const anglePerSegment = (2 * Math.PI) / segments;

    ctx.clearRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2);

    // Gold border
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 15;
    ctx.stroke();

    // Segments
    for (let i = 0; i < segments; i++) {
      const startAngle = i * anglePerSegment;
      const endAngle = (i + 1) * anglePerSegment;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius - 2, startAngle, endAngle);
      ctx.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#DC2626';
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Text
      // Text
ctx.save();
ctx.rotate(startAngle + anglePerSegment / 2);
ctx.textAlign = 'right';
ctx.fillStyle = i % 2 === 0 ? '#000000' : '#FFFFFF';
ctx.font = '14px "Poppins", sans-serif';

const scenarioText = SCENARIOS[i]?.scenario || "";
const truncatedText =
  scenarioText.length > 20 ? scenarioText.substring(0, 17) + "..." : scenarioText;
ctx.fillText(truncatedText, radius - 20, 5);

ctx.restore();
    }

    // Center point
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();

    ctx.setTransform(1, 0, 0, 1, 0, 0);
  };

  const spinWheel = () => {
    if (isSpinning || spinsLeft <= 0) return;

    setIsSpinning(true);
    const spinDuration = 4000;
    const startAngle = angle;
    const spinAmount = 360 * 5 + Math.random() * 360;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / spinDuration, 1);
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const currentAngle = startAngle + spinAmount * easeOut(progress);

      setAngle(currentAngle % 360);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);

        const selectedIndex = Math.floor((currentAngle % 360) / (360 / SCENARIOS.length));
        setCurrentScenario(SCENARIOS[selectedIndex]);

        // Proceed to update the points and spins left after the animation finishes
        axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/updatePoints/${userId}`,
          {
            points: 0,
            spinUpdate: 1
          }
        )
          .then((response) => {
            // Assuming response.data.user.spinleft contains the updated spins left
            const updatedSpinsLeft = response.data.user.spinLeft;
            console.log(updatedSpinsLeft)

            // Update the spins left based on the server response
            setSpinsLeft(updatedSpinsLeft);
          })
          .catch((error) => {
            console.error("Error updating spins left:", error);
            // Handle the error, e.g., show a message to the user
          });
      }

    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    drawWheel();
    getDetail()
  }, [angle]);


  useEffect(() => {
    if (spinsLeft === 0) {
      router.push('/feedback');
    }
  }, [spinsLeft, router]);

  return (<div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header with Language Toggle */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-black">Career Decision Game</h1>
          <div className="bg-white/30 backdrop-blur-sm rounded-full p-1 flex items-center">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-gray-800 text-sm ${language === 'en' ? 'bg-white' : ''
                }`}
            >
              En
            </button>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-3 py-1 rounded-full text-gray-800 text-sm ${language === 'ar' ? 'bg-white' : ''
                }`}
            >
              عربي
            </button>
          </div>
        </div>



        {/* Game Container */}
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 shadow-lg mb-8">
          {/* Stats Display */}
          <div className="flex justify-between mb-6">
            <div className="space-y-1">
              <div className="text-xl font-bold">Global Rank: {detail?.rank}</div>
              <div className="text-xl font-bold">Career points: {careerPoints}</div>
            </div>
            <div className="text-xl font-bold">
              Spin: {spinsLeft}
            </div>
          </div>

          {/* Wheel Container */}
          <div className="relative mb-6 aspect-square">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl">
              <span role="img" aria-label="pointer" >📍</span>
            </div>
            <canvas
              ref={canvasRef}
              width={300}
              height={300}
              className="w-full h-full"
              style={{
                transform: `rotate(${angle}deg)`,
                transition: isSpinning ? 'none' : 'transform 0.3s ease-out'
              }}
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={spinWheel}
              disabled={isSpinning || spinsLeft <= 0}
              className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full disabled:opacity-50"
            >
              Click to spin
            </button>
            <button
              onClick={() => setShowGetSpinsModal(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
            >
              Click to get more spins
            </button>

          </div>
        </div>

        {/* Leaderboard */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Leader Board</h2>
          <div className="flex justify-center items-end space-x-8">
            {detail?.leaderBoard?.map((leader,index) => (
              leader && 
              <div className="text-center">
                <div
                  className={`${(index+1) === 1 ? 'w-24 h-24' : 'w-20 h-20'
                    } bg-gray-200 rounded-full flex items-center justify-center mb-2`}
                >
                  <div className={`${(index+1) === 1 ? 'text-2xl' : 'text-xl'
                    } font-bold`}>
                    #{(index+1)}
                  </div>
                </div>
                <div className="font-semibold">{leader.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scenario Modal */}
        {currentScenario && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-bold mb-4">{currentScenario.scenario}</h3>
              <div className="space-y-4">
                <button
                  onClick={() => setCurrentScenario(null)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded"
                >
                  {currentScenario.easy}
                </button>
                <button
                  onClick={() => {
                    axios.post(
                      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/updatePoints/${userId}`,
                      {
                        points: currentScenario.careerPoints,
                        spinUpdate: 0
                      }
                    )
                      .then((response) => {
                        // Assuming response.data.user.spinleft contains the updated spins left
                        const updatedCareerIncrease = response.data.user.CareerPoints;

                        // Update the spins left based on the server response
                        setCareerPoints(updatedCareerIncrease);
                      })
                      .catch((error) => {
                        console.error("Error updating spins left:", error);
                        // Handle the error, e.g., show a message to the user
                      });
                    setCurrentScenario(null);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                  {currentScenario.tough}
                  <span className="text-sm ml-2">
                    (+{currentScenario.careerPoints} pts)
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
              {showGetSpinsModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setShowGetSpinsModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Get More Spins</h2>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowGetSpinsModal(false);
                }}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {tasks.map(task => (
                <div
                  key={task.id}
                  onClick={(e) => handleTaskClick(task.path, e)}
                  className="bg-blue-50 rounded-xl p-4 border border-blue-200 hover:border-blue-400 transition-colors cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="relative flex flex-col items-center">
                    <img src="/dollar-bag.svg" alt="" className="h-16 w-16 mb-2" />
                    <span className="text-green-700 font-bold">{task.spins}</span>
                  </div>
                  <div className="text-center text-gray-700 font-medium">
                    {task.title}: {task.spins} spins
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      </div>
    </div>
  );
};

export default CareerDecisionGame;