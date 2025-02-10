export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-in-industry',
    title: 'Revolutionizing Manufacturing with AI',
    excerpt: 'How machine learning transforms quality control...',
    content: `
      <h2>The Current Landscape</h2>
      <p>Modern manufacturing faces unprecedented challenges...</p>
      <h3>Case Study: Computer Vision Implementation</h3>
      <pre><code class="language-python">def detect_defects(image):
    # CNN model implementation
    return prediction</code></pre>
      <p>Results showed 98.7% accuracy...</p>
    `,
    date: '2024-03-25',
    tags: ['AI', 'Manufacturing', 'Computer Vision']
  },
  {
    slug: 'smart-grids',
    title: 'Next-Gen Power Distribution Systems',
    excerpt: 'IoT-enabled energy management solutions...',
    content: `
      <h2>Smart Grid Architecture</h2>
      <p>Modern grid systems combine...</p>
      <div class="grid-diagram">
        <!-- Add SVG/Chart component later -->
      </div>
    `,
    date: '2024-04-02',
    tags: ['IoT', 'Energy', 'Electrical']
  },
  {
    slug: 'ai-healthcare',
    title: 'AI in Medical Diagnosis',
    excerpt: 'Revolutionizing patient care through deep learning',
    content: `
      <h2>Neural Networks in Radiology</h2>
      <p>Recent advancements in convolutional neural networks...</p>
      <pre><code class="language-python"># Model architecture
model = Sequential([
    Conv2D(32, (3,3), activation='relu'),
    MaxPooling2D((2,2)),
    Flatten(),
    Dense(128, activation='relu'),
    Dense(3, activation='softmax')
])</code></pre>
    `,
    date: '2024-04-15',
    tags: ['AI', 'Healthcare', 'Neural Networks']
  },
  {
    slug: 'iot-agriculture',
    title: 'Smart Farming Solutions',
    excerpt: 'IoT-enabled precision agriculture systems',
    content: `
      <h3>Soil Monitoring Architecture</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-gray-800 p-4 rounded-lg">
          <h4>Sensor Nodes</h4>
          <p>LoRaWAN-enabled devices collecting...</p>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg">
          <h4>Cloud Analytics</h4>
          <p>Real-time data processing pipeline...</p>
        </div>
      </div>
    `,
    date: '2024-04-20',
    tags: ['IoT', 'Agriculture', 'Embedded Systems']
  },
  {
    slug: 'hybrid-systems',
    title: 'AI-Embedded Hardware',
    excerpt: 'Combining ML models with FPGA acceleration',
    content: `
      <h2>Hardware-Software Co-design</h2>
      <p>Case study: Real-time object detection system...</p>
      <img src="/fpga-acceleration.jpg" alt="FPGA Architecture" class="rounded-lg" />
    `,
    date: '2024-04-25',
    tags: ['Hybrid', 'FPGA', 'Computer Vision']
  }
]; 