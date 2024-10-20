module Api
  module V1
    class SkillsController < ApplicationController
      def index
        skills = {
          frontend: [
            {
              value: 70,
              name: 'React'
            },
            {
              value: 95,
              name: 'HTML/CSS'
            },
            {
              value: 46,
              name: 'Vue'
            },
            {
              value: 82,
              name: 'TypeScript'
            },
            {
              value: 100,
              name: 'JavaScript'
            }
          ],
          backend: [
            {
              value: 100,
              name: 'Ruby'
            },
            {
              value: 30,
              name: 'PHP'
            },
            {
              value: 70,
              name: 'Python'
            },
            {
              value: 10,
              name: 'Go'
            },
            {
              value: 29,
              name: 'Java'
            }
          ],
          tool: [
            {
              value: 47,
              name: 'Figma'
            },
            {
              value: 69,
              name: 'Docker'
            },
            {
              value: 38,
              name: 'Photoshop'
            },
            {
              value: 28,
              name: 'Vagrant'
            },
            {
              value: 79,
              name: 'AWA'
            }
          ],
          other: ['jQuery', 'Swift', 'Kotlin', 'Dart', 'C言語', 'C#', 'C++', 'Oracle', 'PostgreSQL', 'MySQL', 'MongoDB', 'Wordpress', 'Slack', 'Notion', 'Illustrator']
        }.to_json

        render json: skills
      end
    end
  end
end
