import { Award, Trophy, Star, CheckCircle } from 'lucide-react';
import one from '../../../assets/MASiddiqui.jpeg'
import two from  '../../../assets/ELITEASSOCIATENGP.jpeg'

export default function AwardsSection() {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Trophy className="w-12 h-12 text-purple-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-black">Award Winning </span>
            <span className="text-purple-600">Directors</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Our visionary leaders have been honored with the prestigious Big Impact 2024 Award for their exceptional contributions to education and career development.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-purple-600 rounded-3xl p-8 mb-16 text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-10 h-10 text-white" />
            <h2 className="text-3xl font-bold">Big Impact Award 2024</h2>
          </div>
          <p className="text-center text-purple-100 text-lg">
            Recognizing Excellence in Educational Leadership & Social Impact
          </p>
        </div>

        {/* Director Images Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Image 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-3xl bg-gray-100">
              <div className="absolute top-6 right-6 z-10 bg-purple-600 p-3 rounded-full">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <img
                src={one}
                alt="Director receiving Big Impact Award 2024"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-3xl bg-gray-100">
              <div className="absolute top-6 right-6 z-10 bg-purple-600 p-3 rounded-full">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <img
                src={two}
                alt="Director at Big Impact Award 2024 ceremony"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Achievement Highlights */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-700 text-lg">
              <strong className="text-black">Outstanding Leadership:</strong> Recognized for driving sustainable innovation and transforming lives through education
            </p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-700 text-lg">
              <strong className="text-black">Career Impact:</strong> Helped over 5,000+ students achieve their career goals with 100% placement assistance
            </p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <p className="text-gray-700 text-lg">
              <strong className="text-black">Operational Excellence:</strong> Achieved 98% success rate through industry-expert led training programs
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center border-2 border-purple-100">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-purple-600" />
            <Award className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Leading India's Top IT Training Institute
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Under their guidance, Elite Associate continues to set new standards in education excellence, with guaranteed career success for every student.
          </p>
        </div>
      </div>
    </div>
  );
}