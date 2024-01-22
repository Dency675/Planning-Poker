import { Request, Response } from 'express';
import user_story_session_mapping from '../../model/user_story_session_mapping';

const getUserStoryCountsBySession = async (req: Request, res: Response): Promise<void> => {
  try {
    const { session_id } = req.body;

    // Fetch all records for the session
    const userStoryMappings = await user_story_session_mapping.findAll({
      where: { session_id },
    });

    // Total Count
    const totalCount = userStoryMappings.length;

    // Complete Story Count
    const completeStoryCount = userStoryMappings.filter(
      (mapping) => mapping.story_point_result !== 0
    ).length;

    // Incomplete User Story Count
    const incompleteUserStoryCount = userStoryMappings.filter(
      (mapping) => mapping.story_point_result === 0
    ).length;

    res.status(200).json({
      totalCount,
      completeStoryCount,
      incompleteUserStoryCount,
    });
  } catch (error) {
    console.error('Error in getUserStoryCountsBySession:', error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

export default getUserStoryCountsBySession;
