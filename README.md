# 🐾 Fursphere - AI Pet Twin Platform (Web Frontend)

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-98.6%25-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![Deployments](https://img.shields.io/badge/Deployments-87-green)

**An AI-powered platform that creates digital twins of your pets with personality analysis and interactive features.**

[🌐 Live Demo](#) • [📱 Mobile App](https://github.com/keyi-jason-li/fursphere-mobile-offical) • [🔧 Backend API](https://github.com/keyi-jason-li/fursphere-mbti-python-server-offical)

</div>

---

## 📖 Overview

Fursphere is an innovative web application that uses advanced AI to create digital twins of pets. Users can upload photos of their pets, and our system analyzes their personality traits (similar to MBTI for humans), generates AI-powered conversations, and provides personalized insights about their furry companions.

### ✨ Key Features

- **🎭 Pet Personality Analysis**: AI-driven MBTI-style personality assessment for pets
- - **🤖 Interactive AI Chat**: Engage in conversations with your pet's digital twin
  - - **📸 Image Recognition**: Upload pet photos for analysis and profile creation
    - - **📊 Dashboard & Analytics**: Track your pet's personality traits and behaviors
      - - **🎨 Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
        - - **🔐 Secure Authentication**: User account management and data protection
         
          - ---

          ## 🛠️ Tech Stack

          - **Framework**: [Next.js 14](https://nextjs.org/) with App Router
          - - **Language**: [TypeScript](https://www.typescriptlang.org/) (98.6%)
            - - **Styling**: [Tailwind CSS](https://tailwindcss.com/) + PostCSS
              - - **AI Integration**: Custom API integration with Python backend
                - - **State Management**: React Context API
                  - - **Deployment**: Vercel (87 production deployments)
                   
                    - ---

                    ## 🚀 Getting Started

                    ### Prerequisites

                    - Node.js 18.x or higher
                    - - npm or yarn package manager
                      - - Backend API running (see [backend repo](https://github.com/keyi-jason-li/fursphere-mbti-python-server-offical))
                       
                        - ### Installation
                       
                        - 1. **Clone the repository**
                          2.    ```bash
                                   git clone https://github.com/keyi-jason-li/fursphere-mbti-offical.git
                                   cd fursphere-mbti-offical
                                   ```

                                2. **Install dependencies**
                                3.    ```bash
                                         npm install
                                         # or
                                         yarn install
                                         ```

                                      3. **Set up environment variables**
                                      4.    ```bash
                                               cp .env.example .env.local
                                               ```

                                                  Edit `.env.local` with your configuration:
                                           ```env
                                     NEXT_PUBLIC_API_URL=http://localhost:5000
                               NEXT_PUBLIC_APP_URL=http://localhost:3000
                             # Add other environment variables as needed
                             ```

                             4. **Run the development server**
                                ```bash
                                npm run dev
                                # or
                                yarn dev
                                ```

                             5. **Open your browser**

                                Navigate to [http://localhost:3000](http://localhost:3000)

                             ---

                             ## 📁 Project Structure

                             ```
                             fursphere-mbti-offical/
                          ├── src/
                          │   ├── app/                 # Next.js App Router pages
                          │   │   ├── api/            # API routes and proxy
                          │   │   ├── components/     # React components
                          │   │   ├── context/        # Context providers
                          │   │   ├── lib/            # Utility functions
                          │   │   └── mbti/           # MBTI feature pages
                          │   ├── public/             # Static assets
                          │   └── types/              # TypeScript type definitions
                          ├── next.config.js          # Next.js configuration
                          ├── tailwind.config.js      # Tailwind CSS configuration
                          ├── tsconfig.json           # TypeScript configuration
                          └── package.json            # Project dependencies
                          ```

                          ---

                          ## 🎯 Core Features Breakdown

                          ### 1. Pet Profile Creation
                          - Upload multiple pet photos
                          - AI-powered breed detection
                          - Basic information form (name, age, breed)

                          ### 2. Personality Analysis
                          - Custom MBTI-style assessment for pets
                          - Visual personality trait charts
                          - Detailed personality insights

                          ### 3. AI Chat Interface
                          - Real-time conversation with pet's AI twin
                          - Context-aware responses
                          - Chat history and memory

                          ### 4. User Dashboard
                          - Manage multiple pets
                          - View analytics and insights
                          - Access chat history

                          ---

                          ## 🔧 Configuration

                          ### Next.js Config
                          The project uses custom Next.js configuration for:
                          - Image optimization
                          - API proxying
                          - TypeScript strict mode
                          - ESLint integration

                          ### Tailwind Config
                          Custom Tailwind setup includes:
                          - Custom color palette
                          - Responsive breakpoints
                          - Custom animations
                          - Component utilities

                          ---

                          ## 📦 Available Scripts

                          ```bash
                          # Development
                          npm run dev          # Start development server
                          npm run build        # Build for production
                          npm run start        # Start production server

                          # Code Quality
                          npm run lint         # Run ESLint
                          npm run type-check   # Run TypeScript compiler check

                          # Testing (if configured)
                          npm run test         # Run tests
                          ```

                          ---

                          ## 🌐 Deployment

                          The application is continuously deployed to production using:
                          - **Platform**: Vercel
                          - - **Deployments**: 87+ successful deployments
                            - - **Environment**: Production environment with auto-preview for PRs
                             
                              - ### Deploy to Vercel
                             
                              - 1. Connect your GitHub repository to Vercel
                                2. 2. Configure environment variables in Vercel dashboard
                                   3. 3. Deploy automatically on push to main branch
                                     
                                      4. ---
                                     
                                      5. ## 🤝 Contributing
                                     
                                      6. We welcome contributions! This project is a collaborative effort with 6 active contributors.
                                     
                                      7. 1. Fork the repository
                                         2. 2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
                                            3. 3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
                                               4. 4. Push to the branch (`git push origin feature/AmazingFeature`)
                                                  5. 5. Open a Pull Request
                                                    
                                                     6. ---
                                                    
                                                     7. ## 👥 Team
                                                    
                                                     8. - **Contributors**: 6 active developers
                                                        - - **Commits**: 193+ commits
                                                          - - **Active Development**: Last updated 8 months ago
                                                           
                                                            - ---

                                                            ## 📝 License

                                                            This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

                                                            ---

                                                            ## 🔗 Related Projects

                                                            - [📱 Fursphere Mobile App](https://github.com/keyi-jason-li/fursphere-mobile-offical) - React Native mobile application
                                                            - - [🔧 Fursphere Backend API](https://github.com/keyi-jason-li/fursphere-mbti-python-server-offical) - Python Flask backend server
                                                             
                                                              - ---

                                                              ## 📞 Contact

                                                              - **Project Link**: [https://github.com/keyi-jason-li/fursphere-mbti-offical](https://github.com/keyi-jason-li/fursphere-mbti-offical)
                                                              - - **Issues**: [Report a bug or request a feature](https://github.com/keyi-jason-li/fursphere-mbti-offical/issues)
                                                               
                                                                - ---

                                                                <div align="center">
                                                                Made with ❤️ by the Fursphere Team
                                                                </div>div>
