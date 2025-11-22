import { Prisma, PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

const fieldsSeed: Prisma.fieldsCreateManyInput[] = [
  {
    name: 'Mathematics',
    description:
      'Resources that strengthen analytical thinking and problem-solving skills.',
  },
  {
    name: 'Literature',
    description:
      'Guides that develop critical reading and writing for modern literature.',
  },
  {
    name: 'Natural Sciences',
    description:
      'Experiments and lesson plans covering physics, chemistry, and biology.',
  },
  {
    name: 'Languages',
    description:
      'Lessons and practice materials for developing English communication.',
  },
  {
    name: 'Information Technology',
    description:
      'Programming projects, coding exercises, and digital literacy resources.',
  },
];

const subjectsSeed: Prisma.subjectsCreateManyInput[] = [
  {
    name: 'Algebra',
    description:
      'Core algebraic concepts including equations, functions, and their applications.',
  },
  {
    name: 'Modern Literature',
    description:
      'Analysis of contemporary literary works and writing techniques.',
  },
  {
    name: 'Biology',
    description:
      'Cell structures, ecosystems, and applied biology for high school learners.',
  },
  {
    name: 'English Communication',
    description:
      'Speaking, listening, reading, and writing English for academic success.',
  },
  {
    name: 'Python Programming',
    description:
      'Python fundamentals, algorithms, and practical coding assignments.',
  },
];

type DocumentSeed = {
  title: string;
  shortDescription: string;
  gradeBand?: string;
  numericScore?: string;
  resourceType: string;
  resourceUrl: string;
  documentType: string;
  field: string;
  subject: string;
  ownerEmail: string;
};

const documentsSeed: DocumentSeed[] = [
  {
    title: 'Quadratic Functions Masterclass',
    shortDescription:
      'Step-by-step guide to graphing, solving, and applying quadratic functions.',
    gradeBand: 'Grade 10',
    numericScore: '4.6',
    resourceType: 'lesson-plan',
    resourceUrl: 'https://cdn.demo.local/docs/math-quadratic-functions.pdf',
    documentType: 'lecture_note',
    field: 'Mathematics',
    subject: 'Algebra',
    ownerEmail: 'teacher.anna@demo.local',
  },
  {
    title: 'Equation Practice Workbook',
    shortDescription:
      'Twenty algebra problems with detailed solutions for independent study.',
    gradeBand: 'Grade 9',
    numericScore: '4.2',
    resourceType: 'worksheet',
    resourceUrl: 'https://cdn.demo.local/docs/math-equation-practice.pdf',
    documentType: 'exercise',
    field: 'Mathematics',
    subject: 'Algebra',
    ownerEmail: 'teacher.ben@demo.local',
  },
  {
    title: 'Geometry in Real Life',
    shortDescription:
      'Project-based lesson exploring geometry through architecture case studies.',
    gradeBand: 'Grade 11',
    numericScore: '4.5',
    resourceType: 'project-guide',
    resourceUrl: 'https://cdn.demo.local/docs/math-geometry-project.pdf',
    documentType: 'project_template',
    field: 'Mathematics',
    subject: 'Algebra',
    ownerEmail: 'teacher.anna@demo.local',
  },
  {
    title: 'STEM Challenge: Linear Optimization',
    shortDescription:
      'Mini challenge that introduces linear programming concepts for teens.',
    gradeBand: 'Grade 12',
    numericScore: '4.4',
    resourceType: 'challenge',
    resourceUrl: 'https://cdn.demo.local/docs/math-linear-optimization.pdf',
    documentType: 'study_material',
    field: 'Mathematics',
    subject: 'Algebra',
    ownerEmail: 'teacher.ben@demo.local',
  },
  {
    title: 'Contemporary Short Story Toolkit',
    shortDescription:
      'Discussion prompts and literary devices for modern short stories.',
    gradeBand: 'Grade 11',
    numericScore: '4.3',
    resourceType: 'lesson-plan',
    resourceUrl: 'https://cdn.demo.local/docs/lit-short-story-toolkit.pdf',
    documentType: 'lecture_note',
    field: 'Literature',
    subject: 'Modern Literature',
    ownerEmail: 'teacher.anna@demo.local',
  },
  {
    title: 'Essay Writing Playbook',
    shortDescription:
      'Template-driven resource for analytical essays with grading rubrics.',
    gradeBand: 'Grade 12',
    numericScore: '4.1',
    resourceType: 'study-guide',
    resourceUrl: 'https://cdn.demo.local/docs/lit-essay-playbook.pdf',
    documentType: 'study_material',
    field: 'Literature',
    subject: 'Modern Literature',
    ownerEmail: 'teacher.ben@demo.local',
  },
  {
    title: 'Poetry Close Reading Slides',
    shortDescription:
      'Slide deck that teaches imagery, tone, and structure in modern poetry.',
    gradeBand: 'Grade 10',
    numericScore: '4.7',
    resourceType: 'presentation',
    resourceUrl: 'https://cdn.demo.local/docs/lit-poetry-close-reading.pdf',
    documentType: 'lecture_note',
    field: 'Literature',
    subject: 'Modern Literature',
    ownerEmail: 'teacher.anna@demo.local',
  },
  {
    title: 'Book Club Discussion Guide',
    shortDescription:
      'Weekly schedule and facilitation tips for student-led reading circles.',
    gradeBand: 'After-school program',
    numericScore: '4.0',
    resourceType: 'facilitator-guide',
    resourceUrl: 'https://cdn.demo.local/docs/lit-book-club-guide.pdf',
    documentType: 'study_material',
    field: 'Literature',
    subject: 'Modern Literature',
    ownerEmail: 'teacher.ben@demo.local',
  },
  {
    title: 'Cell Structure Lab Walkthrough',
    shortDescription:
      'Hands-on experiment outline with safety notes and expected results.',
    gradeBand: 'Grade 10',
    numericScore: '4.6',
    resourceType: 'lab-guide',
    resourceUrl: 'https://cdn.demo.local/docs/science-cell-structure.pdf',
    documentType: 'lab_manual',
    field: 'Natural Sciences',
    subject: 'Biology',
    ownerEmail: 'teacher.anna@demo.local',
  },
  {
    title: 'Ecosystem Case Study Pack',
    shortDescription:
      'Three ecosystem case studies plus reflection questions for group work.',
    gradeBand: 'Grade 9',
    numericScore: '4.3',
    resourceType: 'case-study',
    resourceUrl: 'https://cdn.demo.local/docs/science-ecosystem-pack.pdf',
    documentType: 'study_material',
    field: 'Natural Sciences',
    subject: 'Biology',
    ownerEmail: 'teacher.ben@demo.local',
  },
  {
    title: 'Human Anatomy Revision Cards',
    shortDescription:
      'Printable anatomy flashcards with mnemonics for quick revision.',
    gradeBand: 'Grade 12',
    numericScore: '4.2',
    resourceType: 'flashcard',
    resourceUrl: 'https://cdn.demo.local/docs/science-anatomy-cards.pdf',
    documentType: 'flashcard',
    field: 'Natural Sciences',
    subject: 'Biology',
    ownerEmail: 'teacher.anna@demo.local',
  },
  {
    title: 'Inquiry Project: Water Quality',
    shortDescription:
      'Student inquiry framework for testing and reporting on water samples.',
    gradeBand: 'Grade 11',
    numericScore: '4.5',
    resourceType: 'project-guide',
    resourceUrl: 'https://cdn.demo.local/docs/science-water-quality.pdf',
    documentType: 'project_template',
    field: 'Natural Sciences',
    subject: 'Biology',
    ownerEmail: 'teacher.ben@demo.local',
  },
  {
    title: 'English Listening Sprint',
    shortDescription:
      'Six-week plan with curated audio clips and comprehension checkpoints.',
    gradeBand: 'Intermediate ESL',
    numericScore: '4.4',
    resourceType: 'lesson-plan',
    resourceUrl: 'https://cdn.demo.local/docs/lang-listening-sprint.pdf',
    documentType: 'lecture_note',
    field: 'Languages',
    subject: 'English Communication',
    ownerEmail: 'teacher.anna@demo.local',
  },
  {
    title: 'Conversation Role-play Cards',
    shortDescription:
      'Scenario-based role-play prompts to build English speaking confidence.',
    gradeBand: 'Beginner ESL',
    numericScore: '4.1',
    resourceType: 'activity-pack',
    resourceUrl: 'https://cdn.demo.local/docs/lang-role-play-cards.pdf',
    documentType: 'exercise',
    field: 'Languages',
    subject: 'English Communication',
    ownerEmail: 'teacher.ben@demo.local',
  },
  {
    title: 'Academic Vocabulary Builder',
    shortDescription:
      'Weekly vocabulary lists with collocations and practice exercises.',
    gradeBand: 'Advanced ESL',
    numericScore: '4.5',
    resourceType: 'study-guide',
    resourceUrl: 'https://cdn.demo.local/docs/lang-academic-vocabulary.pdf',
    documentType: 'study_material',
    field: 'Languages',
    subject: 'English Communication',
    ownerEmail: 'teacher.anna@demo.local',
  },
  {
    title: 'Pronunciation Clinic Worksheets',
    shortDescription:
      'Targeted pronunciation drills with audio links and self-review logs.',
    gradeBand: 'Upper-intermediate ESL',
    numericScore: '4.2',
    resourceType: 'worksheet',
    resourceUrl: 'https://cdn.demo.local/docs/lang-pronunciation-clinic.pdf',
    documentType: 'exercise',
    field: 'Languages',
    subject: 'English Communication',
    ownerEmail: 'teacher.ben@demo.local',
  },
  {
    title: 'Python Fundamentals Slide Deck',
    shortDescription:
      'Introduction to Python syntax and control structures with code samples.',
    gradeBand: 'Grade 11',
    numericScore: '4.8',
    resourceType: 'presentation',
    resourceUrl: 'https://cdn.demo.local/docs/it-python-fundamentals.pdf',
    documentType: 'lecture_note',
    field: 'Information Technology',
    subject: 'Python Programming',
    ownerEmail: 'teacher.anna@demo.local',
  },
  {
    title: 'Daily Coding Challenge Set',
    shortDescription:
      'Thirty short Python coding challenges with incremental difficulty.',
    gradeBand: 'Grade 12',
    numericScore: '4.6',
    resourceType: 'worksheet',
    resourceUrl: 'https://cdn.demo.local/docs/it-python-daily-challenge.pdf',
    documentType: 'exercise',
    field: 'Information Technology',
    subject: 'Python Programming',
    ownerEmail: 'teacher.ben@demo.local',
  },
  {
    title: 'Flask Web App Starter Project',
    shortDescription:
      'Project brief and starter code for building a simple Flask web application.',
    gradeBand: 'Grade 12',
    numericScore: '4.7',
    resourceType: 'project-guide',
    resourceUrl: 'https://cdn.demo.local/docs/it-python-flask-project.pdf',
    documentType: 'project_template',
    field: 'Information Technology',
    subject: 'Python Programming',
    ownerEmail: 'teacher.anna@demo.local',
  },
  {
    title: 'Data Analysis with Pandas',
    shortDescription:
      'Walkthrough for exploring datasets using pandas with annotated notebooks.',
    gradeBand: 'Grade 12',
    numericScore: '4.9',
    resourceType: 'lesson-plan',
    resourceUrl: 'https://cdn.demo.local/docs/it-python-pandas.pdf',
    documentType: 'lecture_note',
    field: 'Information Technology',
    subject: 'Python Programming',
    ownerEmail: 'teacher.ben@demo.local',
  },
];

async function main() {
  await prisma.fields.createMany({
    data: fieldsSeed,
    skipDuplicates: true,
  });

  await prisma.subjects.createMany({
    data: subjectsSeed,
    skipDuplicates: true,
  });

  const teachers = await Promise.all([
    prisma.users.upsert({
      where: { email: 'teacher.anna@demo.local' },
      update: {},
      create: {
        email: 'teacher.anna@demo.local',
        full_name: 'Anna Thompson',
        created_at: new Date(),
      },
    }),
    prisma.users.upsert({
      where: { email: 'teacher.ben@demo.local' },
      update: {},
      create: {
        email: 'teacher.ben@demo.local',
        full_name: 'Ben Carter',
        created_at: new Date(),
      },
    }),
  ]);

  const fieldRecords = await prisma.fields.findMany({
    where: {
      name: { in: fieldsSeed.map((field) => field.name) },
    },
  });
  const subjectRecords = await prisma.subjects.findMany({
    where: {
      name: { in: subjectsSeed.map((subject) => subject.name) },
    },
  });

  const fieldMap = new Map(fieldRecords.map((field) => [field.name, field.id]));
  const subjectMap = new Map(
    subjectRecords.map((subject) => [subject.name, subject.id]),
  );
  const userMap = new Map(teachers.map((teacher) => [teacher.email, teacher.id]));

  for (const document of documentsSeed) {
    const existing = await prisma.documents.findFirst({
      where: { title: document.title },
    });

    if (existing) {
      continue;
    }

    await prisma.documents.create({
      data: {
        user_id: userMap.get(document.ownerEmail) as number,
        title: document.title,
        short_description: document.shortDescription,
        grade_band: document.gradeBand ?? null,
        numeric_score: document.numericScore
          ? new Prisma.Decimal(document.numericScore)
          : null,
        document_type: document.documentType,
        resource_type: document.resourceType,
        resource_url: document.resourceUrl,
        created_at: new Date(),
        document_fields: {
          create: [
            {
              field_id: fieldMap.get(document.field) as number,
            },
          ],
        },
        document_subjects: {
          create: [
            {
              subject_id: subjectMap.get(document.subject) as number,
            },
          ],
        },
      },
    });
  }
}

main()
  .then(async () => {
    console.log('Database seed completed successfully.');
  })
  .catch(async (error) => {
    console.error('Seeding failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
